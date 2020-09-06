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
  const client = await mongodb.MongoClient.connect( process.env.VUE_APP_MONGODB_CNCT, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  });
  return client.db('Dragon').collection('Authors');
}

module.exports = router;
