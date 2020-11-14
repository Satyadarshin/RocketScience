/**
 * HTTP server setup goes here.
 */

require('dotenv').config()

const app = require('./app');
const mongoClient = require('./db');

// Port supplied by Heroku or the local dev.
const port = process.env.PORT || 5000;

// Wait for db to connect (only connect to the db once and then stay connected) and then listen for HTTP requests.
mongoClient.then(() => {
  app.listen(port, () => console.log(`Server started on port ${port}`));
});
