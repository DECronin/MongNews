const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");
const axios = require("axios");
const db = require("../models");
const cheerio = require("cheerio");


router.get("/", (req, res) => {
    db.Article.find({saved: false}).sort({dateCreated: -1}).then(data => {
        res.render("index", {favorited: false, articles: data.map(x => x.toObject())})
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
            res.render("index", {favorited: false, articles: data.map(x => x.toObject())});
        })
    });
})

router.get("/saved", (req, res) => {
    db.Article.find({saved: true}).sort({dateCreated: -1}).then(data => {
        res.render("index", {favorited: true, articles: data.map(x => x.toObject())})
    })
})

// For now I am electing to 'Not' inclue Update comments so that people annot update someone else's?

// Create Comment

// Delete Comment

// Update Saved/Unsaved Articles 


module.exports = router;