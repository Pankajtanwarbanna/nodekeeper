const constant  = require('../lib/constant');

const logger = (type, message) => {
    console.log(constant.COLOR[type], `[nodekeeper] ${message}`); 
}

module.exports = logger; 