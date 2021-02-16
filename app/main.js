const express = require("express");
const cart = require("./src/routes/routes.js");
const bodyParser = require("body-parser");
const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", cart);

module.exports = app;
