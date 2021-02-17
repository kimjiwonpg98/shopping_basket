const express = require("express");
const cart = require("./src/routes/routes.js");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", cart);

module.exports = app;
