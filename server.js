require("dotenv").config();
var express = require("express");
var app = express();
var mongoose = require("mongoose");
const path = require("path");
const exphbs = require("express-handlebars");
const router = require("./routes/index");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
mongoose.connect("mongodb://localhost/mongnews", { useNewUrlParser: true });

app.use("/", router);

app.listen(3000, function() {
console.log("App running on port 3000!");
});

module.exports = app;