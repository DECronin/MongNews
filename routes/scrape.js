const express = require("express");
const db = require("../models");
const router = express.Router();

// router.get("/api/players", (req, res) => {
//     db.Players.findAll({
//         include: [
//             {
//                 model: db.Rooms
//             }
//         ]
//     }).then(result => {
//         res.json(result);
//         // res.render("index", result);
//     });
// });
//  app.get("/scrape", (req, res) => {
//     db.spells.remove({});
//     axios.get("https://www.spellsofmagic.com/spells.html").then(function(response) {
//       var $ = cheerio.load(response.data);
//       $("li.condensedtext").each(function(i, element) {
//         var text = $(element).children().text();
//         var link = $(element).find("a").attr("href");
//         var category = $(element).parentsUntil("div.spell_list_7_section").children("div.h").children().text();
//         category = category.replace(/(\r\n|\n|\r)/gm, "");
    
//         console.log(category);
//         db.spells.insert({
//           text: text,
//           href: link,
//           category: category
//         });
//       });
//       console.log('-');
//     });
//   })

module.exports = router;
