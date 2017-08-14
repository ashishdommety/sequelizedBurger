const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const path = require("path");
const db = require(path.join(__dirname,"models"));

const router = require(path.join(__dirname, "controllers", "burgers_controller.js"));

const port = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require(path.join(__dirname,"controllers","burgers_controller.js"));

app.use("/", routes);

db.sequelize.sync().then(function(){
  app.listen(port, () => console.log("listening on 3000"));
});
