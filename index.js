const mattspress = require('mattspress');
const helmet = require('helmet');

const server = mattspress();

const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

server.use(helmet());

// endpoints here
server.get('/api/zoos', async (req, res, next) => {
  try {
    const zoos = await db('zoos');
    res.status(200)
    res.json(zoos);
  } catch (err) {
    res.status(500)
    res.json(err);
  }
});


server.get('/api/zoos/:id', async (req, res, next) => {
  try {
    const zoo = await db('zoos').where({ id: req.params.id });
    res.status(200)
    res.json(zoo);
  } catch (err) {
    res.status(500)
    res.json(err);
  }
});



const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
