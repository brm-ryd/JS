"use strict";
/** @type {module:express} */
var express = require("express"),
/** @type {module:http} */
var http = require("http"),

  /* @type {HttpServer}
  server = http.createServer(function( request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write( "<h1> Requested: " + request.url + "</h1>");
    response.end();
  });

  server.listen(80);
  console.log("listening state ... ");
*/
/**	@type	{Object}		*/
				app	=	express();
//	Send	common	HTTP	header	for	every	incoming	request
app.all(	"*",	function(	request,	response,	next	)	{
		response.writeHead(	200,	{	"Content-Type":	"text/plain"	}	);
		next();
});
//	Say	hello	for	the	landing	page
app.get(	"/",	function(	request,	response	)	{
		response.end(	"Welcome	to	the	homepage!"	);
});
//	Show	use	if	for	requests	like	http://localhost/user/1
app.get(	"/user/:id",	function(	request,	response	)	{
		response.end(	"Requested	ID:	"		+	req.params.id	);
});
//	Show	`Page	not	found`	for	any	other	requests
app.get(	"*",	function(	request,	response	)	{
		response.end(	"Opps...	Page	not	found!"	);
});
http.createServer(	app	).listen(	80	);
