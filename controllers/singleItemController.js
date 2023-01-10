const Product = require("../models/Products");

exports.singleItem = (req, res, next) => { 
    
    Product.findById(req.params.item, (err, item) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).render("singleItem", {
          title: "List",
          data: item,
        });
      }
    }); 
};
