const mongoose = require("mongoose");
const Post = require("../models/post");

const homeStartingContent =
	"Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
	"Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
	"Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

postController = {};

postController.getAllPost = (req, res) => {
	Post.find({}, function (err, result) {
		if (err) return console.log("" + err);
		res.render("home", { homeStartingContent: homeStartingContent, postCompose: result });
	});
};

postController.getAbout = (req, res) => {
	res.render("about", { aboutContent: aboutContent });
};

postController.getContact = (req, res) => {
	res.render("contact", { contactContent: contactContent });
};

postController.getCompose = (req, res) => {
	res.render("compose");
};

postController.postCompose = (req, res) => {
	const posts = new Post({
		title: req.body.postTitle,
		content: req.body.postBody,
	});
	posts.save();
	res.redirect("/");
};

postController.getAllPostById = (req, res) => {
	Post.find({ _id: req.params.id }, function (err, result) {
		if (err) return console.log("" + err);
		res.render("post", { postContent: result });
	});
};

postController.updatePostById = (req, res) => {
	Post.findByIdAndUpdate({ _id: req.body.id }, { title: req.body.postTitle, content: req.body.postBody }, (err) => {
		if (err) return console.log("" + err);
		res.redirect("/posts/" + req.body.id);
	});
};

postController.deletePostById = (req, res) => {
	Post.findByIdAndDelete({ _id: req.body.postbtn }, function (err) {
		if (err) return console.log("" + err);
		res.redirect("/");
	});
};

module.exports = postController;
