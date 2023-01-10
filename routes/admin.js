const express = require('express');
const router = express.Router();
const path = require('path');
const AddProductController = require('../controllers/addProductController'); 
const showProduct = require('../controllers/showProducts');
const listingCont = require('../controllers/listingProduct');
const singleItemCont = require('../controllers/singleItemController');

router.get("/add", AddProductController.AddProductController);
 
router.get("/listing", listingCont.listing);

router.post("/product", showProduct.products);

router.get("/listing/:item", singleItemCont.singleItem);

 
module.exports =  router;

