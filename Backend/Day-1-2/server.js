const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("BACKEND is awesome!");
});

server.get("/about", (req, res) => {
  res.send("BACKEND with NodeJs is awesome!");
});

server.listen(3000, () => {
  console.log("Server is runnig...");
});
