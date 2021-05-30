const constant      = require('../lib/constant');
const fs            = require('fs');

exports.isValidJS   = (fileName) => {
    fileName        = fileName.endsWith(constant.JS_EXT) ? fileName : fileName + constant.JS_EXT;

    return fs.existsSync('./' + fileName);
}

exports.debounce    = (func, delay) => {
    let debounceTimer;

    return function() {
        let context = this;
        let args    = arguments;

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {
            func.apply(context, args);
        }, delay)
    }
}