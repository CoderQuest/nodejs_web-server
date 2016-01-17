middleware =  {
	requireAuthentication: function(req, res, next) {			// requires user to login, tihs is route level middleware
		console.log('Private route hit!');									// to add middleWare to express, need the anonymous function taker three arguments
		next();																							// next tells the function to move on after user is loggin
	},																											
	logger: function(req, res, next) {
		var date = new Date().toString();
		console.log('Requst made on ' + date + " for " + req.method + ' ' + req.originalUrl);		// outputs the request type(.method) and requested page(.originalUrl)
		next();																							// to hard refresh, use the command + shift + r. this will show all the request made and to what page
	}
};

module.exports = middleware;