require("dotenv").config();
var express = require("express");
var app = express();
var mongoose = require("mongoose");
const path = require("path");
const exphbs = require("express-handlebars");
const router = require("./routes/index");
// var db = require("./models");
// var databaseUrl = "mongnews";
// var collections = ["articles", "comments"];
// var db = mongojs(databaseUrl, collections);
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
mongoose.connect("mongodb://localhost/mongnews", { useNewUrlParser: true });

// routers == ????
app.use("/", router);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
// });
// // error handler
// app.use(function(err, req, res, next) {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === "development" ? err : {};
//     res.status(err.status || 500);
//     res.render("error");
// });

app.listen(3000, function() {
console.log("App running on port 3000!");
});

module.exports = app;