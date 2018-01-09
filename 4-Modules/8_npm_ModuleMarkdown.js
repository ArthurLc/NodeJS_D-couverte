var markdown = require('markdown').markdown; // Module "markdown": Permet de convertir du code markdown en HTML. (Ajouter via npm sous cmd)

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));