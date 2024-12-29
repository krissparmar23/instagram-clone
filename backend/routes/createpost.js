const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const POST = mongoose.model("POST");

// Route: Get all posts
router.get("/allposts", requireLogin, async (req, res) => {
  try {
    const posts = await POST.find().populate("postedBy", "_id name");
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// Route: Create a post
router.post("/createPost", requireLogin, async (req, res) => {
  const { body, pic } = req.body;

  if (!body || !pic) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    const post = new POST({
      body,
      photo: pic,
      postedBy: req.user,
    });
    const result = await post.save();
    res.json({ post: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create post" });
  }
});

// Route: Get my posts
router.get("/myposts", requireLogin, async (req, res) => {
  try {
    const myposts = await POST.find({ postedBy: req.user._id }).populate(
      "postedBy",
      "_id name"
    );
    res.json(myposts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch your posts" });
  }
});

// Route: Like a post
router.put("/like", requireLogin, async (req, res) => {
  try {
    const result = await POST.findByIdAndUpdate(
      req.body.postId,
      { $push: { likes: req.user._id } },
      { new: true }
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(422).json({ error: err });
  }
});

// Route: Unlike a post
router.put("/unlike", requireLogin, async (req, res) => {
  try {
    const result = await POST.findByIdAndUpdate(
      req.body.postId,
      { $pull: { likes: req.user._id } },
      { new: true }
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(422).json({ error: err });
  }
});

module.exports = router;
