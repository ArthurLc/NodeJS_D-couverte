var express = require('express');

var app = express();


//Route dynamique sous la forme ':nomVariable'
app.get('/etage/:etagenum/chambre', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

	// Affichage de la variable 'req.params.nomVariable'
    res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);

});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !\nRendez-vous à la chambre de votre choix !');
});

app.listen(8080);