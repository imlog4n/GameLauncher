const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.get("/assets/:file", (req, res) => {
    res.sendFile(path.join(__dirname, `assets/${req.params.file}`));
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/404.html"));
})

app.listen(3000)