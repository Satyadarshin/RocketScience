/**
 * DB setup goes here.
 */

const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient.connect( process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoClient;
