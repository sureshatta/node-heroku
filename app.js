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


	

	

	router.get('/getLargeText', function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Content-Type", "text/html; charset=UTF-8");
		if(!fileExists("large.txt")){
			var wstream = fs.createWriteStream('large.txt');
			for(var i=0; i < 50; i++){
				var rstream = fs.createReadStream('download.txt');
				rstream.pipe(wstream);
			}
		}else {
			console.log("large text available. Cool.");
		}
		if(wstream){
			wstream.on('finish', function() {
				console.log("stream completed.. doing stuff now. Get ready.");
				var stream = fs.createReadStream("large.txt");
				stream.on("error", function (err) {
					res.end("There was an error.");
				})
				stream.pipe(res);
			});
		}else {
			var stream = fs.createReadStream("large.txt");
			stream.on("error", function (err) {
				res.end("There was an error.");
			})
			stream.pipe(res);
		}
	});

	router.get('/generateFile', function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Content-Type", "text/html; charset=UTF-8");
		var wstream = fs.createWriteStream('large.txt');
		for(var i=0; i < 50; i++){
			var rstream = fs.createReadStream('download.txt');
			rstream.pipe(wstream);
		}
		res.write("success");
		res.end();
	});

	function fileExists(filePath)
	{
		try
		{
			return fs.statSync(filePath).isFile();
		}
		catch (err)
		{
			return false;
		}
	}


	


