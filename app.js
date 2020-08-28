//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();
const mongoose = require("mongoose");

const post = require("./routers/post");

// mongoose.connect("mongodb://localhost:27017/blogDB", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.connect("mongodb+srv://admin-arman:997381@clusterfree.r8dwl.gcp.mongodb.net/blogDB", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/", post);

app.listen(process.env.PORT || 3000, function () {
	console.log("Server started on port 3000");
});
