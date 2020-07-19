const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get authors
router.get('/', async (req, res) => {
  // const query = req.query;
  // const parameter = Object.keys(query);
  // const value = Object.values(query);
  try {
    const authors = await loadAuthorsCollection();
    res.send(await authors.find({}).toArray());
  } catch (error) {
    return console.log(error)  
  }
});

async function loadAuthorsCollection() {
  const client = await mongodb.MongoClient.connect(
    // Username: password pair redacted from the Github repo for security
   `mongodb+srv://${process.env.VUE_APP_MONGODB_USER}:${process.env.VUE_APP_MONGODB_PASSWORD}@cluster0.pne15.mongodb.net/̣`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    }
  );
  return client.db('Dragon').collection('Authors');
}

module.exports = router;
