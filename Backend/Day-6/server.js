const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");

const app = express();
connectToDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  console.log(title, content);

  await noteModel.create({ title, content });

  res.json({
    message: "New note added successfully!",
  });
});

app.listen(3000);
