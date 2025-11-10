const express = require("express");
const createDataBase = require("./src/db/db.js");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

createDataBase();

app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  console.log(title, content);
  res.json({
    message: "New note has been added!",
  });
});

app.listen(3000);
