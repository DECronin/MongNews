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
