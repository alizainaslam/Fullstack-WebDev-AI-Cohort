import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  audio: String,
});

const songModel = mongoose.model("song", songSchema);

export default songModel;
