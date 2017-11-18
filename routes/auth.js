function init(app, User, randomString){
	app.post('/user/auth/register', function(req, res){
		var user = new User({
			_id : randomString.generate(14),
			nickname : req.param('nickname'),
			password : req.param('password'),
			win_count : 0,
			lose_count : 0,
			mmr : 0,
			acc_count : 0,
			gold : 0,
			con_item : [],
			equipment : []
		});
		user.save(function (err, result) {
            if(err){
                console.log("DB Saving Error!");
                res.send(401, result);
                throw err;
            }
            console.log("DB Saved" + user);
            res.send(200, result);
        });
	});

	app.post('/user/auth/login', function(req, res){
		 console.log("User Login : " + req.param('id'));
        User.findOne({id : req.param('id')}, function (err, result) {
            console.log("DB Founded : "+ result);
            if(err){
                console.log("/auth/local/login failed");
                throw err;

            }
            if(result) {
                if (req.param('id') == undefined) {
                    console.log("Unvalid User Infomation");
                    res.send(403, "Unvalid User Infomation");
                }
                else if (req.param('id') != undefined && result.password == req.param('password')) {
                    console.log("User " + result.name + "Logged In");
                    // req.session.id = result._id;
                    // req.session.name = result.name;
                    res.send(200, result);
                }
                else if (result.password != req.param('password')) {
                    console.log("Password Error!");
                    res.send(401, "Access Denied");
                }
            }
            else{
                console.log("Can't Find User Data");
                res.send(403, "Cant't Find User Data");
            }
        });
	});
}

module.exports = init;