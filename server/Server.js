"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const articlesDB = require("./ModelAplications");
const uri1 = 'mongodb://localhost:27017/front';
const server = express();
const path = require("path");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.set("views", ".");
server.engine('html', require('ejs').renderFile);

server.set('view engine', 'twig');

server.use("/static", express.static(path.join(__dirname, "..", "static")));
server.use("adminMode.html", express.static(path.join(__dirname, "..", "static")));

articlesDB.mongoose
    .connect(uri1, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => {
      console.log("Connected to MongoDB.");
    })
    .catch((err) => {
      console.error("Error while connecting to DB", err);
      process.exit();
    });
require("../routes/loadingRoute")(server);
require("../routes/booksRoute")(server);
server.listen(8888, () => {
  console.log(`Server is running on port 8888.`);
});
