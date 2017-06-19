var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// uses
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

// connect to mongoose
mongoose.connect('localhost:27017/realestate');

var newListing = new mongoose.Schema({
  cost: Number,
  rent: Number,
  sqft: Number,
  city: String
});

var listingsModel = mongoose.model('listings', newListing);

router.get('/', function(req, res) {
  console.log('listings get route hit');
  listingsModel.find().then(function(data) {
    console.log('data');
    res.send(data);
  }); // end find
}); //end get route

router.post('/', function(req, res) {
  console.log('listing post route hit:', req.body);
  // req.body property names must match up to Schema
  var newListing = listingsModel(req.body);
  console.log(newListing);
  newListing.save();
  res.send('Listed!');
}); //end post


module.exports = router;
