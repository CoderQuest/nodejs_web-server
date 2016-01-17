var express = require('express');
var middleware = require('./middleware.js');
var app = express();
// var PORT = 3000;				// when variable is all uppercase that means this variable should be constant
var PORT = process.env.PORT || 3000;   // process.env.PORT is set up to run server on heroku

// app.get('/', function(req, res) {				//takes two arguments, url path and anonymous function
// 																				//anonymous function take two arguments, req - request: holds info sending from the user, res - response: sends info back to user
// 	res.send('Hello Express!');						// if no root path is selected, index.html would be the default file
// });  



app.use(middleware.logger);
// app.use(middleware.requireAuthentication);			// order matters
// /about
// About us
app.get('/about', middleware.requireAuthentication, function(req, res) {					// to add middleware to a specific page, you just use middleware.requireAuthentication as the second argument
	res.send('About us');																														// this is the application level middleware
})


// .use exposes a folder to the serverside
// console.log(__dirname)  __dirname tells the location of you file
app.use(express.static(__dirname + '/public'));


app.listen(PORT, function () {
	console.log('Express server started at PORT: ' + PORT );
});