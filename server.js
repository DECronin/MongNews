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

let PORT = process.env.PORT || 3000

app.listen(PORT, function() {
console.log("App running on port 3000!");
});

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongnews";
mongoose.connect(MONGODB_URI);

module.exports = app;