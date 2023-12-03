var mongoose = require("mongoose");
var joi = require("@hapi/joi");
const { string } = require("@hapi/joi");

var blogSchema = mongoose.Schema({
  title: String,
  category: String,
  content: String,
});

var Blogs = mongoose.model("blogs", blogSchema);

function validateBlog(data) {
  var joiSchema = joi.object({
    title: joi.string().required(true),
    category: joi.string().required(true),
    content: joi.string().required(true),
  });
  return joiSchema.validate(data, { abortEarly: false });
}

module.exports.Blogs = Blogs;
module.exports.validateBlog = validateBlog;
