const mattspress = require('mattspress');
const helmet = require('helmet');

const server = mattspress();

const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

server.use(helmet());

// endpoints here


const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
