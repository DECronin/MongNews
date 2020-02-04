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

module.exports = router;

// app.post("/articles/:id", function (req, res) {
//     db.Note.create(req.body)
//       .then(function (dbNote) {
//         // then find an article from the req.params.id
//         console.log(dbNote.id);
//         return db.Article.findByIdAndUpdate(req.params.id,
  
//           // and update it's "note" property with the _id of the new note
//           { note: dbNote.id });
//       })
//       .then(function (dbArticle) {
//         // If the User was updated successfully, send it back to the client
//         res.json(dbArticle);
//       })
//       .catch(function (err) {
//         res.json(err);
//       });
//   });