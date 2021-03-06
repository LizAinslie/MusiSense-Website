const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static("./public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/privacy", (req, res) => {
  res.render("privacy");
});

app.listen(process.env.PORT);
