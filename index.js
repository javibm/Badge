var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

PORT = 	process.env.PORT || "3005";
BIND_IP = process.env.BIND_IP || "192.168.1.155";

app.get('/badge', function(req,res){

	var badge = require('gh-badges');
	// Optional step, to have accurate text width computation.
	badge.loadFont('/path/to/Verdana.ttf', function(err) {
	  badge({ text: ["build", "passed"], colorscheme: "green", template: "flat" },
	    function(svg, err) {
	     res.send(svg);
	    });
	});
});


app.listen(PORT, BIND_IP, function() 
{
	console.log("* listening service in "+ BIND_IP + ":" + PORT);
}).on('error', function(err) 
{ 
	console.log("* initializing error: "+ err);
	//setTimeout(initializeRestService,4000);
});



