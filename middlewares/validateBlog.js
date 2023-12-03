var { validateBlog } = require("../models/blogModel");

var validation = (req, res, next) => {
  let { error } = validateBlog(req.body);
  if (error) return res.send(error.details[0].message);
  next();
};
module.exports = validation;
