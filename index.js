require('dotenv').config();
const server = require('./src/server.js');
const PORT = process.env.PORT || 3002;

server.start(PORT);