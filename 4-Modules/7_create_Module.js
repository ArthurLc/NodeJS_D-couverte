//var monModule = require('./testModule'); // Fait appel à testModule.js (même dossier)
//var monModule = require('../testModule'); // Fait appel à testModule.js (dossier parent)
var monModule = require('testModule'); // Fait appel à testModule.js (sous-dossier node_modules)

monModule.direBonjour(); // Appel de la fonction "direBonjour" du module "monModule"
monModule.direByeBye();