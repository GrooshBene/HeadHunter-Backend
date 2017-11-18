var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var randomString = require('randomstring');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var schema = mongoose.Schema;

var UserSchema = new schema({
  	_id : String,
    nickname : String,
    password : String
    win_count : Number,
    lose_count : Number,
    mmr : Number,
    acc_count : Number
    gold : Number,
    con_item : [{
    	type : String,
    	refs : "cons"
    }],
    equipment : [{
    	type : String,
    	refs : "equip"
    }]
});

var ConsumbaleSchema = new schema({
	_id : String,
	name : String,
	description : String
});

var EquipmentSchema = new schema({
	_id : String,
	name : String,
	description : String,
	part : Number
});

mongoose.connect("mongodb://localhost:27017/stockchat", function (err) {
    if(err){
      console.log("MongoDB Error");
      throw err;
    }
    console.log("DB Connection Established");
});

var User = mongoose.model('users', UserSchema);
var Consumable = mongoose.model('cons', ConsumbaleSchema);
var EquipmentSchema = mongoose.model('equip', EquipmentSchema);

require('./routes/auth.js')(app, User, randomString);
require('./routes/users.js')(app, User);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
