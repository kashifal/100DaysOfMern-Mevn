const express = require('express');
const app = express();
const mongoose = require("mongoose");

const notfound = require('./controllers/NotFoundController');
mongoose.connect("mongodb://127.0.0.1:27017/twitter", {
    useNewUrlParser:true
});




 
 

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
const admin = require('./routes/admin');
const shop = require('./routes/shop');
const path = require("path");

 


app.set('view engine', 'ejs');
app.set('views', 'views') 
app.use("/public", express.static("public"));

app.use(shop);
app.use('/admin',admin);

app.use(notfound.notfound)
 





app.listen(3000, () => {
    console.log('Listening__@__3000');
})