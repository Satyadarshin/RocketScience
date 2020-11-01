const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get authors from MongoDB
router.get('/', async (req, res) => {
  const query = req.query;
  const authors = await loadAuthorsCollection();
  res.send(await authors.find(query).toArray());
});

async function loadAuthorsCollection() {
  const client = await mongodb.MongoClient.connect( process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const authors = client.db('Dragon').collection('Authors');
  return await authors.find().toArray();
}


module.exports.router = router;
module.exports.loadAuthorsCollection = loadAuthorsCollection;
