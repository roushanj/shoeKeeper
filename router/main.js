var express = require('express');
var Shoe = require('../model/shoe');
var router = express.Router();

router.get('/', function(req, res, next) {
	var shoe = new Shoe();

	Shoe.find(function(err, shoe){
		if (err)
			res.send(err);
		res.json({shoe});
	});

});

router.post('/add', function (req, res, next) {

	var shoe = new Shoe();

	shoe.name = req.body.name
	shoe.color = req.body.color
	shoe.price = req.body.price
	shoe.quantity = req.body.quantity

	shoe.save(function(err) {
        if (err){
        	res.json(err);
        }else{
        	res.json({ message: shoe });
        }
           
           
     });

});

router.delete('/del/:id',function (req,res,next) {
	var shoe = new Shoe();

	
	Shoe.findById(req.params.id, function(err, shoe){
	        shoe.remove({
            _id: req.params.id
        }, function(err, shoe) {
            if (err){
                res.json(err);
            }else{
            	res.json({ message: shoe });
            }

            
        });
	});

});

router.put('/update/:id',function (req,res,next) {
	var shoe = new Shoe();
	
	Shoe.findById(req.params.id, function(err, shoe){
			shoe.name = req.body.name
			shoe.color = req.body.color
			shoe.price = req.body.price
			shoe.quantity = req.body.quantity
	        	shoe.save({
            		_id: req.params.id
        		}, function(err, shoe) {
            	if (err)
                res.send(err);
				res.json({ message: shoe });
        });
	});

});

router.get('/inventory', function(req, res, next) {
	var shoe = new Shoe();

	Shoe.find(function (err, shoe) {
		if (err)
			res.send(err);
		res.json({"LastAddedItem":shoe});
	}).sort({_id:-1}).limit(1)

});

router.get('/filter/:id',function (req,res,next) {
	var shoe = new Shoe();

	
	Shoe.findById(req.params.id, function(err, shoe){
	        shoe.save({
            _id: req.params.id
        }, function(err, shoe) {
            if (err)
                res.send(err);

            res.json({ Name: shoe.name,
            		   Color:shoe.color,
            		   Size:shoe.size,
            		   Qty:shoe.quantity,
            		   LastUpdatedAt:shoe.updatedAt
             });
        });
	});

});



module.exports = router;