var express = require('express');

var app = express();


app.get('/compter/:nombre', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David']; //Déclatation d'un tableau en JavaScript
    res.render('page.ejs', {compteur: req.params.nombre, noms: noms}); //Lecture du fichier 'page.ejs'
});

app.listen(8080);