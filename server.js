// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/routes/index');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', index);

// globals
var port = process.env.PORT || 3355;

// spin up server
app.listen(port, function() {
  console.log('server up on:', port);
}); // end server up
