const express = require("express");

const app = express();

app.use(express.json());

let Notes = [];

app.get("/", (req, res) => {
  res.send("A nodejs app has been running here!");
});

app.post("/notes", async (req, res) => {
  const notes = await req.body;
  Notes.push(notes);
  res.json({
    message: "Note added successfully!",
  });
  console.log(Notes);
});

app.patch("/notes/:index", async (req, res) => {
  const idx = req.params.index;
  const { title } = req.body;
  Notes[idx].title = title;
  res.json({
    message: "Note updated successfully!",
  });

  console.log(Notes);
});

app.delete("/notes/:index", async (req, res) => {
  const index = req.params.index;
  delete Notes[index];

  res.json({
    message: "Note has been deleted successfully.",
  });
  console.log(Notes);
});

app.listen(3000);
