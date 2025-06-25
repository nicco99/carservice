const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.set("view engine", "ejs");

// Static files
app.use(express.static("public"));
app.use("bootstrap", express.static(path.join(__dirname, "/public/bootstrap")));
app.use("css", express.static(path.join(__dirname, "/public/css")));
app.use("lib", express.static(path.join(__dirname, "/public/lib")));
app.use("img", express.static(path.join(__dirname, "/public/img")));

// Use centralized routes
app.use("/", routes);

app.listen(5000, () => console.log("Server listening on port 5000"));