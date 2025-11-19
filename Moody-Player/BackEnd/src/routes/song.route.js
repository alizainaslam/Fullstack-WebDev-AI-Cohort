import express from "express";
import multer from "multer";
import uploadFile from "../services/songkit.service.js";
import songModel from "../models/song.model.js";
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/song", upload.single("audio"), async (req, res) => {
  const audioFile = await uploadFile(req.file);
  const requestBody = req.body;

  const response = await songModel.create({
    title: requestBody.title,
    artist: requestBody.artist,
    audio: audioFile.url,
    mood: requestBody.mood,
  });

  res.status(201).json({
    message: "New request has been created successfully.",
    response,
  });
});

router.get("/song", async (req, res) => {
  const mood = req.query.mood;
  const findSong = await songModel.find({
    mood: mood,
  });
  res.status(200).json({
    message: "Song received successfully!",
    findSong,
  });
});

export default router;
