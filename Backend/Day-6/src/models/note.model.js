const mongoose = require("mongoose");

const noteModelSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const noteModel = mongoose.model("notes", noteModelSchema);

module.exports = noteModel;
