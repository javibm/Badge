var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(bodyParser.json());

PORT = 	process.env.PORT || "3005";
var badge = require('gh-badges');

app.get('/runner/passing', function(req,res){
	// Optional step, to have accurate text width computation.
	badge.loadFont('/path/to/Verdana.ttf', function(err) {
	  badge({ text: ["Runner", "passing"], colorscheme: "green", template: "flat-square" },
	    function(svg, err) {
		     fs.writeFile("runner.html", svg, function(err) {
			    if(err) {
			        return console.log(err);
			    }
			    res.sendStatus(200);
			}); 
	    });
	});
});

app.get('/runner/failed', function(req,res){
	// Optional step, to have accurate text width computation.
	badge.loadFont('/path/to/Verdana.ttf', function(err) {
	  badge({ text: ["Runner", "failed"], colorscheme: "red", template: "flat-square" },
	    function(svg, err) {
		     fs.writeFile("runner.html", svg, function(err) {
			    if(err) {
			        return console.log(err);
			    }
			    res.sendStatus(200);
			}); 
	    });
	});
});

app.get('/runner/running', function(req,res){
	// Optional step, to have accurate text width computation.
	badge.loadFont('/path/to/Verdana.ttf', function(err) {
	  badge({ text: ["Runner", "running"], colorscheme: "blue", template: "flat-square" },
	    function(svg, err) {
		     fs.writeFile("runner.html", svg, function(err) {
			    if(err) {
			        return console.log(err);
			    }
			    res.sendStatus(200);
			}); 
	    });
	});
});

app.get('/dodgepro/passing', function(req,res){
	// Optional step, to have accurate text width computation.
	badge.loadFont('/path/to/Verdana.ttf', function(err) {
	  badge({ text: ["DodgePro", "passing"], colorscheme: "green", template: "flat-square" },
	    function(svg, err) {
		     fs.writeFile("dodgepro.html", svg, function(err) {
			    if(err) {
			        return console.log(err);
			    }
			    res.sendStatus(200);
			}); 
	    });
	});
});

app.get('/dodgepro/failed', function(req,res){
	// Optional step, to have accurate text width computation.
	badge.loadFont('/path/to/Verdana.ttf', function(err) {
	  badge({ text: ["DodgePro", "failed"], colorscheme: "red", template: "flat-square" },
	    function(svg, err) {
		     fs.writeFile("dodgepro.html", svg, function(err) {
			    if(err) {
			        return console.log(err);
			    }
			    res.sendStatus(200);
			}); 
	    });
	});
});

app.get('/dodgepro/running', function(req,res){
	// Optional step, to have accurate text width computation.
	badge.loadFont('/path/to/Verdana.ttf', function(err) {
	  badge({ text: ["DodgePro", "running"], colorscheme: "blue", template: "flat-square" },
	    function(svg, err) {
		     fs.writeFile("dodgepro.html", svg, function(err) {
			    if(err) {
			        return console.log(err);
			    }
			    res.sendStatus(200);
			}); 
	    });
	});
});

app.get('/runner', function(req,res){
    res.setHeader('content-type', 'image/svg+xml');
	res.sendFile(__dirname + '/runner.html')
});

app.get('/dodgepro', function(req,res){
    res.setHeader('content-type', 'image/svg+xml');
	res.sendFile(__dirname + '/dodgepro.html')
});


app.listen(PORT, function() 
{
	console.log("* listening service in " + ":" + PORT);
}).on('error', function(err) 
{ 
	console.log("* initializing error: "+ err);
	//setTimeout(initializeRestService,4000);
});



