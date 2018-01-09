var EventEmitter = require('events').EventEmitter; // Module "eventEmitter": Ajout de l'objet, permet de créer des events.


var jeu = new EventEmitter(); // Création de l'objet


jeu.on('gameover', function(message){ // Definition l'évènement sur 'on'

    console.log(message); // Contenu...

});


jeu.emit('gameover', 'Vous avez perdu !'); // Appel de l'évènnement !