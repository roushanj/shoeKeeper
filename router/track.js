var express =require('express');
var Shoe = require('../model/shoe');
var track = express.Router();

track.get('/track', function (req, res, next) {
	var shoe = new Shoe();
   
	Shoe.count(function (err, shoe) {
		if (err)
			res.send(err);
		res.json({"Stock":shoe});
	});

});

module.exports = track;