function init(app, User){
	app.post('/user/update/gold', function(req, res){
		User.findOneAndUpdate({_id : req.param('id')}, {gold : req.param('value')}, {returnNewDocument : true}).exec(function(err, result){
			if(err){
                console.log('/user/update/gold failed');
                res.send(401, result);
                throw err;
            }
            res.send(200, result);
		});
	});

	app.post('/user/update/item', function(req, res){
		User.findOneAndUpdate({_id : req.param('id')}, {con_item : req.param('value')}, {returnNewDocument : true}).exec(function(err, result){
			if(err){
                console.log('/user/update/gold failed');
                res.send(401, result);
                throw err;
            }
            res.send(200, result);
		});
	});

	app.post('/user/update/equip', function(req, res){
		User.findOneAndUpdate({_id : req.param('id')}, {equip : req.param('value')}, {returnNewDocument : true}).exec(function(err, result){
			if(err){
                console.log('/user/update/gold failed');
                res.send(401, result);
                throw err;
            }
            res.send(200, result);
		});
	});
}
module.exports = init;