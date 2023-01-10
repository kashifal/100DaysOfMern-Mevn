const mongoose = require("mongoose");

const product_schema = mongoose.Schema({
  product_name: String,
  product_description: String,
  product_url: String,
});


module.exports = mongoose.model("Product", product_schema);