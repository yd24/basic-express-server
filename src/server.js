'use strict';

const express = require('express');
const cors = require('cors');
const validator = require('./middleware/validator.js');
const logger = require('./middleware/logger.js');

const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');

const app = express();
app.use(cors());
app.use(logger);

app.get('/person', validator, (request, response, next) => {
    let nameObj = {name: request.query.name};
    response.json(nameObj);
});

app.use('*', error404);
app.use(error500);

module.exports = {
    app,
    start: (port) => app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    }),
};
module.exports = {
    app,
    start: (port) => app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    }),
};