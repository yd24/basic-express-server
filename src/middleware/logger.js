'use strict';

function logger(request, response, next) {
    console.log(request.method + ' ' + request.path);
    next();
}

module.exports = logger;