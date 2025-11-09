const express = require("express");

const app = express();

app.use(express.json());

const Notes = [];

app.post("/notes", (req, res) => {
  console.log(req.body);
  Notes.push(req.body);
  res.send(Notes);
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
