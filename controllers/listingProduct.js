const Product = require('../models/Products');

exports.listing = (req, res,next) => { 
  Product.find({}, function(err,items) {
    if(err){
      console.log(err);
    }else{
res.status(200).render("shop", {
  title: "List",
  data: items,
});
    }
  })
 
  
   
};
