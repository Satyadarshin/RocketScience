const express = require('express');
const mongoClient = require('../../db');

const router = express.Router();

router.get('/', async (req, res) => {
  const query = req.query;
  const authors = await loadAuthorsCollection(query);
  res.send(authors);
});

async function loadAuthorsCollection(query) {
  const client = await mongoClient;
  const authors = client.db('Dragon').collection('Authors');
  return await authors.find(query).toArray();
}


module.exports = router;
