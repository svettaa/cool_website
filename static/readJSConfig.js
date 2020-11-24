

const config = require('../config/config.json')



console.log(config.letter)

function getLetter(){
    return config.letter;
}
exports.configfile = getLetter()
