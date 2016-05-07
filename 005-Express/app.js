var express = require('express');

var logger = require('morgan');

var routes = require('./routes/index');
var path = require('path');
var errorHandler = require('errorhandler');

// Creating the express app
var app = express();

// Setting the app to listen for requests on port 3000
app.set('port', 3000);

// Setting the directory path for views (using the path.join() method)
app.set('views', path.join(__dirname, 'views'));

// Setting the extension to use for views (if none was specified)
app.set('view engine', 'jade');

// Setting the environment mode to development (defaults to this anyway)
app.set('env', 'development');

// Logging all requests in dev format i.e. in the most verbose detail possible
app.use(logger('dev'));

// Telling express where static files will be placed. If express can't find
// a route that matches the request, it will look in the static directory i.e. public
app.use(express.static(path.join(__dirname, 'public')));

// If the environment mode is in development (which it is, as we set it above
// earlier, then we will using the error handler middleware - so that we can get as
// much information as possible about the errors that occur in the app)
if (app.get("env") == "development") {
  app.use(errorHandler());
}

// Declaring the function as an anonymous inline function
app.get("/", function (req, res) {
  console.log("request received");
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><head><title>Home Page</title></head><body><h1>Home</h1></body></html>');
  res.end();
});

app.get("/contact", contact);

// Delcaring the function seperate to the use statement
function contact(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><head><title>Contact Page</title></head><body><h1>Contact</h1></body></html>');
  res.end();
}

// Declaring function as a variable before routing it
var about = function(req, res){
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><head><title>About Page</title></head><body><h1>About</h1></body></html>');
  res.end();
}

app.get("/about", about);

app.get("/help", routes.help);

app.listen(app.get("port"), function(){
  console.log("Server is now running on port " + app.get("port"));
});
