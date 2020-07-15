const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get authors
router.get('/', async (req, res) => {
  // res.send('go, flight');
  const authors = await loadAuthorsCollection();
  res.send(await authors.find({}).toArray());
});

// Add author
// router.author('/', async (req, res) => {
//   const authors = await loadAuthorsCollection();
//   await authors.insertOne({
//     text: req.body.text,
//     createdAt: new Date()
//   });
//   res.status(201).send();
// });

// // Delete author
// router.delete('/:id', async (req, res) => {
//   const authors = await loadAuthorsCollection();
//   await authors.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
//   res.status(200).send({});
// });

async function loadAuthorsCollection() {
  const username = 'saturnV';
  const password = 'apollo11';
  const client = await mongodb.MongoClient.connect(
    // Username: password pair redacted from the Github repo for security
   `mongodb+srv://${username}:${password}@cluster0.pne15.mongodb.net/̣`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    }
  );

return client.db('Dragon').collection('Authors');
}

module.exports = router;
