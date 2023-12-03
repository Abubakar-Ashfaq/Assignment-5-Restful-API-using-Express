var express = require("express");
var router = express.Router();
var { Blogs, v } = require("../models/blogModel");
var validation = require("../middlewares/validateBlog");
/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    let blogs = await Blogs.find();
    if (!blogs) return res.status(400).send("could not get the blogs");
    res.send(blogs);
  } catch (error) {
    return res.status(400).send("some error occured");
  }
});
router.get("/:id", async function (req, res, next) {
  let blogs = await Blogs.findById(req.params.id);
  res.send(blogs);
});
router.post("/", validation, async function (req, res, next) {
  try {
    let blogs = new Blogs();
    blogs.title = req.body.title;
    blogs.category = req.body.category;
    blogs.content = req.body.content;
    await blogs.save();
    res.send(blogs);
  } catch (error) {
    return res.status(400).send(error);
  }
});
router.put("/:id", validation, async function (req, res, next) {
  let blogs = await Blogs.findById(req.params.id);
  blogs.title = req.body.title;
  blogs.category = req.body.category;
  blogs.content = req.body.content;
  await blogs.save();
  res.send(blogs);
});
router.delete("/:id", async function (req, res, next) {S
  let blogs = await Blogs.findByIdAndDelete(req.params.id);
  res.send(blogs);
});

module.exports = router;
