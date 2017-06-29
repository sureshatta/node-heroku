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
		res.header("Content-Type", "text/html; charset=UTF-8");

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

	router.get('/getText', function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Content-Type", "text/html; charset=UTF-8");
		var obj = fs.readFileSync('download.txt', 'utf8');
        res.write(obj);
		res.end();
	});

	router.get('/getLargeText', function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Content-Type", "text/html; charset=UTF-8");
		fs.createReadStream("large.txt").pipe(res);
		// 
	});

	router.get('/generateFile', function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Content-Type", "text/html; charset=UTF-8");

		var wstream = fs.createWriteStream('large.txt');

		for(var i=0; i < 80; i++){
		var rstream = fs.createReadStream('download.txt');
		rstream.pipe(wstream);
		}
        res.write("success");
		res.end();
	});




	


