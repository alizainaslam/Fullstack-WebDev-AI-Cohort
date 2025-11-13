const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");

const app = express();
app.use(express.json());

connectToDB();

app.get("/notes", async (req, res) => {
  try {
    const notes = await noteModel.find();
    res.json(notes);
  } catch (error) {
    res.json({ message: "Server error" });
  }
});

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  await noteModel.create({ title, content });

  res.json({
    message: "New note has been added successfully.",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { title } = req.body;

  await noteModel.findByIdAndUpdate(id, { title }, { new: true });

  res.json({
    message: "Title has been updated successfully.",
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete(id);

  res.json({
    message: "Notes has been deleted successfully.",
  });
});

app.listen(3000, () => {
  console.log("Server running at port: 3000");
});
