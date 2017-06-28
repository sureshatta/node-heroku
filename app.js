	var request = require('request');
	var fs = require('fs');
	var express    = require('express');
	var app        = express();
	var bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	var port = process.env.PORT || 8080;
	var router = express.Router();
	app.listen(port);
	console.log("Server started.");

	app.use('/v1', router);


	router.get('/getData', function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
		var obj = JSON.parse(fs.readFileSync('download.json', 'utf8'));
		var k=0;
		var result={};
		for(var i=0; i<10; i++){
           result[""+i+""] = obj;
           console.log(i);
           res.write(JSON.stringify(obj));
		}
		res.end();
		

	});

	router.get('/getDataGB', function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
		var obj = JSON.parse(fs.readFileSync('download.json', 'utf8'));
		var k=0;
		var result={};
		for(var i=0; i<6800; i++){
           result[""+i+""] = obj;
           console.log(i);
           res.write(JSON.stringify(obj));
		}
		res.end();

	});

	router.get('/getDataHGB', function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
		var obj = JSON.parse(fs.readFileSync('download.json', 'utf8'));
		var k=0;
		var result={};
		for(var i=0; i<3400; i++){
           result[""+i+""] = obj;
           console.log(i);
           res.write(JSON.stringify(obj));
		}
		res.end();

	});


	router.get('/getDataQGB', function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
		var obj = JSON.parse(fs.readFileSync('download.json', 'utf8'));
		var k=0;
		var result={};
		for(var i=0; i<1700; i++){
           result[""+i+""] = obj;
           console.log(i);
           res.write(JSON.stringify(obj));
		}
		res.end();

	});


	router.get('/getDataHGB', function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
		var obj = JSON.parse(fs.readFileSync('download.json', 'utf8'));
		var k=0;
		var result={};
		for(var i=0; i<850; i++){
           result[""+i+""] = obj;
           console.log(i);
           res.write(JSON.stringify(obj));
		}
		res.end();

	});


