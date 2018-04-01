var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');
var mongoose   = require('mongoose');

mongoose.connect('mongodb://oliver:oliver@ds231199.mlab.com:31199/shoe');

var app= express();
var main = require('./router/main');
var track = require('./router/track');


app.set('views',path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout : null }));
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, ('public'))));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',main);
app.use('/collection', track);

app.listen(process.env.PORT || 3000, function() {

	console.log('server is listening');
});