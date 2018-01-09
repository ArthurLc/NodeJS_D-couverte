var express = require('express');

var app = express();


app.get('/etage/:etagenum/chambre', function(req, res) {
	//Utilisation du Module "ejs": Système de templates.
	//Lecture du fichier 'chambre.ejs' contenu dans un dossier 'view' à la même hauteur que le .js.
    res.render('chambre.ejs', {etage: req.params.etagenum});
	//(Permet d'éviter d'écrire du code HTML au milieu du code JavaScript comme un cochon !)

});

app.listen(8080);