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
		res.json(obj);

	});


