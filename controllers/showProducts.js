const Product = require('../models/Products');

exports.products = (req, res, next) => {
    const product = new Product({
      product_name: req.body.title,
      product_description: req.body.description,
      product_url: req.body.url,
    }); 
    product.save();
  res.redirect("/admin/listing"); 
};
