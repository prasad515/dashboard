const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const https = require("https");
const fs = require("fs");

let app = express();

const winston = require("winston");

// VIEWS
app.set("view engine", "ejs");

// program specific folders
const view_folder_paths = [];
view_folder_paths.push(path.join(__dirname, "programs"));
app.set("views", view_folder_paths);

//public files
app.use(express.static(path.join(__dirname, "programs/dashboard/views/_public")));

app.use('/static', express.static('static'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//*******************************************************************
//ROUTES
require("./programs/_main/routes")(app);

let port = 3000;
app.listen(port, function () {
    console.log("server has started on port " + port);
});