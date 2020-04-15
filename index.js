require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 3300;

const server = express();
server.use(express.json());

server.use('/api', routes);

server.listen(PORT, console.log(`Server started on http://localhost:${PORT}/api`))

module.exports = server;
