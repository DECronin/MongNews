const express = require("express");
const router = express.Router();
// var mongojs = require("mongojs");
// var axios = require("axios");
// var db = require("../models");
// var cheerio = require("cheerio");

// Root & Articles (Render Scraped Data After Comparing to Saved)
router.get("/", (req, res) => {
    // Auto Scrape? or have a general loading directions page?
    let data = {test: "cake"};
    res.render("index", data);
});

// Called from Button to Re-Scrape 20 new articles
    // Test if scraped article already exists in saved?
// router.get("/scrape", (req, res) => {
//     // axios.get("")
//     res.render("index", data);
// })

// Re-Render Index with Saved Article Data
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