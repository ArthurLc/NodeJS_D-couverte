var http = require('http');
var url = require('url'); //Module "url": Il récupérer la page demandée par le visiteur.

var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname; //Récupération de la page demandée
	console.log(page);
	if(page == '/'){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("Vous êtes à l\'accueil, que puis-je pour vous ?");
	}
	else if(page == '/sous-sol'){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write('Vous êtes dans la vace à vins, ces bouteilles sont à moi !');
	}
	else if(page == "/etage/1/chambre"){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("Hé ho, c\'est privé ici !");
	}
	else{
		res.writeHead(404);
		res.write("Erreur 404, page not found !");
	}
	  
	res.end();
});

server.listen(8080);