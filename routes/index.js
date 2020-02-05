const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");
const axios = require("axios");
const db = require("../models");
const cheerio = require("cheerio");


router.get("/", (req, res) => {
    db.Article.find({ saved: false }).sort({ dateCreated: -1 }).then(data => {
        res.render("index", { favorited: false, articles: data.map(x => x.toObject()) })
    })
});

router.get("/scrape", (req, res) => {
    axios.get("https://www.nytimes.com/").then((result) => {
        const articles = [];
        const $ = cheerio.load(result.data);
        $("div.css-6p6lnl").each((i, el) => {
            let article = {};
            article.title = $(el).children("a").children("div").children("h2").text();
            article.summary = $(el).children("a").children("p").text() || "No Summary Provided. Please explore link for further information.";
            article.link = "https://www.nytimes.com" + $(el).children("a").attr("href");
            // // test if article already exists in db
            // needs some kind of async await maybe?
            // db.Article.find({link: article.link}).then(data => {
            //     console.log(i +': ' + data);
            //     data.length > 0 ? console.log('Article Already Scraped') : articles.push(article);
            // })  
            articles.push(article);
        })
        db.Article.insertMany(articles).then((data) => {
            // Populate blank comments for each new article
            data.forEach(c => {
                db.Comment.create({ user: "", body: "" }).then(comData => {
                    console.log(comData);
                    db.Article.update({
                        _id: c.id
                    }, {
                        $set: {
                            comment: [comData.id]
                        }
                    }, (err, Cdata) => {
                        err ? console.log(err) : '';
                    })
                })
            })
            res.render("index", { favorited: false, articles: data.map(x => x.toObject()) });
        });
    })
})

router.get("/saved", (req, res) => {
    db.Article.find({ saved: true }).sort({ dateCreated: -1 }).then(data => {
        res.render("index", { favorited: true, articles: data.map(x => x.toObject()) })
    })
})

// For now I am electing to 'Not' inclue Update comments so that people annot update someone else's?

// Pull/Display Comments
router.get("/api/comments/:id", (req, res) => {
    console.log('api');
    res.send(req.params.id);
    // db.Article.findOne({ _id: req.params.id }).populate("comment").then((data) => {
    //     console.log(`db -connection:\n\n${data}`);
    //     res.send(data)
    // })
})

// Create Comment
router.post("api/new-comment/:id", (req, res) => {
    db.Comment.create(req.body).then((comData) => {
        db.Article.update({
            _id: req.params.id
        }, {
            $push: {
                comment: comData.id
            }
        }, (err, data) => {
            err ? console.log(err) : res.send(data);
        })
    })
})

// Delete Comment
router.post("api/del-comment/:id", (req, res) => {
    db.Comments.remove({ _id: req.params.id }).then((data) => res.send(data));
})

// Update Saved/Unsaved Articles 
router.post("/api/articles/:id/:status", (req, res) => {
    let status = req.params.status === "save" ? true : false;
    db.Article.update({ _id: req.params.id }, { $set: { saved: status } }).then((data) => res.send(data));
})


module.exports = router;