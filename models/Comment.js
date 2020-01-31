var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var CommentSchema = new Schema({
  user: String,
  body: String
});

var Comment = mongoose.model("Comment", NoteSchema);

module.exports = Comment;