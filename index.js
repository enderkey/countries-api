const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));   

routes(app);

// Start the server
const server = app.listen(PORT, (error) => {
  if (error) console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});

