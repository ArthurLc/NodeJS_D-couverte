var express = require('express');

var app = express();

// On oublie pas qu'il est possible d'imbriquer en javascript... *Outch*
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes sur mon premier serveur construit avec Express, que puis-je pour vous ?');
})
.get('/sous-sol', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
})
.get('/etage/1/chambre', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
    res.end('Hé ho, c\'est privé ici !');
})
.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

app.listen(8080);