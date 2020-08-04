const express = require('express');
//const mongodb = require('mongodb');
const {connectDb, models} = require('../../models');

const mongoose = require('mongoose');
// const mongoDb = connectDb;
// const app = express();
const db = connectDb;



// console.log(db);
// db.on('error', console.error.bind(console, 'Connection error:'))

// Author.find((err, Authors)=> {
//   if (err) return console.error(err)
//   console.log(Authors)
// })

// db.once('open', ()=> {
//   console.log('we are in')
// })

const router = express.Router();

// Get authors
router.get('/', async (req, res) => {
  const query = req.query;
  try {
    const authors = await loadAuthorsCollection();
    console.log(authors);
    res.send(await authors.find(query).toArray());
  } catch (error) {
    return console.log(error)  
  }
});

async function loadAuthorsCollection() {
  // const client = await connectDb.MongoClient.connect(
  //   );
  db().then(async () => {
  express.listen(process.env.PORT, function() {
    console.log('in');
  })
  });
  // return client.db('Dragon').collection('Authors');
}

module.exports = router;
