const express = require("express");
const router = express.Router();

const post = require("../controllers/postController");

router.get("/", (req, res) => {
	post.getAllPost(req, res);
});

router.get("/posts/:id", (req, res) => {
	post.getAllPostById(req, res);
});

router.get("/about", (req, res) => {
	post.getAbout(req, res);
});

router.get("/contact", (req, res) => {
	post.getContact(req, res);
});

router
	.route("/compose")

	.get((req, res) => {
		post.getCompose(req, res);
	})

	.post((req, res) => {
		post.postCompose(req, res);
	});

router.post("/update", (req, res) => {
	post.updatePostById(req, res);
});

router.post("/delete", (req, res) => {
	post.deletePostById(req, res);
});

module.exports = router;
