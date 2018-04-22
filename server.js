//create necessary databse connection strings
var dbs = 'mongodb://localhost:27017/cs252-votingApp';

//creating a port for the server to listen on
var port = process.env.PORT || 8000;

//Loading in the node modules
var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = require("./constants");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-core").transform("code", {
  plugins: ["transform-es2015-modules-commonjs"]
});
//var middlewaresConfig = require('./middleware');
var express = require('express');
var morgan = require('morgan'); 
//var mongoose = require('mongoose');
var bp = require('body-parser');
var de = require('dotenv');

//remove warnings
_mongoose2.Promise = global.Promise;

//create an express app that enables use of middleware
var app = express();

//converted es6 to commonjs code
var _middlewares = require("./middleware");

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-core").transform("code", {
  plugins: ["transform-es2015-modules-commonjs"]
});

(0, _middlewares2.default)(app);

//load in environment varibales
de.config({ verbose: true });

//Setup the databse connection
_mongoose.connect(dbs, function(err) {
	if(err){
		console.log(err);
	}
});

//Monitoring the DB connection events
_mongoose.connection.on('connected', function(){
	console.log('Successfully opened a connection to ' + dbs);
});

_mongoose.connection.on('disconnected', function(){
	console.log('Successfully disconnected from ' + dbs);
});

_mongoose.connection.on('error', function(){
	console.log('Error has occured connecting to ' + dbs);
});

//configure middleware
app.use(morgan('dev'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));
app.get("*", function(request, response){
	response.sendFile(__dirname + '/public/index.html');
});

//Running the server
app.listen(port, function(){
	console.log('Listening on ' + port);
});

console.log(process.env.secret);