var http = require('http'); //Ajout du module (~Bibliothèque) "http": Objet qui permet de lancer un serveur Web

var instructionsNouveauVisiteur = function(req, res) {//Fonction (en param) à exécuter quand un visiteur se connecte
  res.writeHead(200, {"Content-Type": "text/html"}); //Norme HTTP & Type du champ
  res.end('<p>Voici un paragraphe <strong>HTML</strong> ! </p>'); //Contenu du champ
}

var server = http.createServer(instructionsNouveauVisiteur); //Création du serveur

server.listen(8080); //Port sur lequel le serveur est ouvert