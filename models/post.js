const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	content: {
		type: String,
	},
});

module.exports = mongoose.model("Post", postsSchema);
