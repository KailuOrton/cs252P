//create necessary databse connection strings
var dbs = 'mongodb://localhost:27017/cs252-votingApp';

//creating a port for the server to listen on
var port = process.env.PORT || 8000;

//Loading in the node modules
var express = require('express');
var morgan = require('morgan'); 
var mongoose = require('mongoose');
var bp = require('body-parser');
var de = require('dotenv');

//create an express app that enables use of middleware
var app = express();

//load in environment varibales
de.config({ verbose: true });

//Setup the databse connection
mongoose.connect(dbs, function(err){
	if(err){
		console.log(err);
	} 
});

//Monitoring the DB connection events
mongoose.connection.on('connected', function(){
	console.log('Successfully opened a connection to ' + dbs);
});

mongoose.connection.on('disconnected', function(){
	console.log('Successfully disconnected from ' + dbs);
});

mongoose.connection.on('error', function(){
	console.log('Error has occured connecting to ' + dbs);
});

//configure middleware
app.use(morgan('dev'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.get("*", function(request, response){
	response.sendFile(__dirname + '/public/index.html');
});

//Running the server
app.listen(port, function(){
	console.log('Listening on ' + port);
});
