const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
require('dotenv').config();

const PORT = process.env.NODE_ENV === 'test' ? process.env.NODE_DOCKER_PORT_TEST : process.env.NODE_DOCKER_PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

routes(app);

// Start the server
const server = app.listen(PORT, (error) => {
  if (error) console.log(`Error: ${error}`);

  console.log(`Server listening on port ${PORT}`);
});

module.exports = { app, server };
