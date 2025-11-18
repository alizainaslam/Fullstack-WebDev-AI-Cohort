import express from "express";
import multer from "multer";
import uploadFile from "../services/songkit.service.js";
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/song", upload.single("audio"), async (req, res) => {
  const result = await uploadFile(req.file);
  console.log(result);
  res.status(201).json({
    message: "New request has been created successfully.",
  });
});

export default router;
