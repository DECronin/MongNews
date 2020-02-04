const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");
const axios = require("axios");
const db = require("../models");
const cheerio = require("cheerio");


router.get("/", (req, res) => {
    // Change to simply pull all unsaved from db
    res.redirect("/scrape");
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
            articles.push(article);
        })
        db.Article.insertMany(articles).then((data) => {
            console.log(data);
            res.render("index", {newScrape: true, articles: data.map(x => x.toObject())});
        })
    });
})

router.get("/saved", (req, res) => {
    
})



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ get vs put !!!
    // req.params.status === push save article or remove/unsave
// router.get("/api/saved/:status?", (req, res) => {
//     if (req.params.status){
//         if (req.body.save){
//             db.articles.insert(req.body).then((err) => {
//                 err ? console.log(err) : res.reload();
//             });
//         } else if (req.body.delete){
//             db.articles.remove({
//                 _id : req.body.id
//             }).then((err) => {
//                 err ? console.log(err) : res.reload();
//             });
//         }
//     } else {
//         db.articles.find({}).then((err, data) => {
//             err ? console.log(err) : res.render("index", data);            
//         });
//     }
// });

// Renders Data of Comments 
    // req.params.button === create-comment or delete-comment in req.body(true) otherwise view all with form(false)
// router.get("/api/saved/:id/:button?", (req, res) => {
//     if (req.params.button){
//         db.articles.find({
//             _id: req.params.id
//         }).then((err, data) => {
//             err ? console.log(err) : console.log(data + "\n------\n" + req.body);
//             // db.comments.insert();
//             // db.comments.remove();
//         })
//     } else {
//         // pull all comments relevant to article id to display
//         db.articles.find({
//             _id: req.params.id
//         }).then((err, data) => {
//             err ? console.log(err) : res.render("index", data);
//         });        
//     }
// });


module.exports = router;