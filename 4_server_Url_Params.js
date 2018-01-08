var http = require('http');
var url = require('url');
var querystring = require('querystring'); // Module "querystring": Il permet de découper les url.

var server = http.createServer(function(req, res) {
	var params = querystring.parse(url.parse(req.url).query); //Découpage de l'url
	res.writeHead(200, {"Content-Type": "text/plain"});
	if('prenom' in params && 'nom' in params){
		res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
	}
	else{
		res.write('Vous devez bien avoir un prénom et un nom, non ?');
	}
	res.end();
});

server.listen(8080);