const express = require('express');
const mongodb = require('mongodb');
//const mongoose = require('mongoose');
// const mongoDB = `mongodb+srv://${process.env.VUE_APP_MONGODB_USER}:${process.env.VUE_APP_MONGODB_PASSWORD}@cluster0.pne15.mongodb.net/̣`

// mongoose.connect(mongoDB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true 
// })

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'))

// const authorSchema = new mongoose.Schema({
//   // "id": 100,
//   name: String,
//   born: Date,
//   died: Date,
//   biography: String,
//   website: [  {LinkText: String, url: String} ],
//   gender: String,
//   ethnicity: String,
//   origin: String,
//   // texts: [ 1000 ]
// })
// const Author = mongoose.model('Author', authorSchema)

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
    res.send(await authors.find(query).toArray());
  } catch (error) {
    return console.log(error)  
  }
});

async function loadAuthorsCollection() {
  const client = await mongodb.MongoClient.connect(
    // Username: password pair redacted from the Github repo for security
   `mongodb+srv://${process.env.VUE_APP_MONGODB_USER}:${process.env.VUE_APP_MONGODB_PASSWORD}@cluster0.pne15.mongodb.net/̣`, {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    }
  );
  return client.db('Dragon').collection('Authors');
}

module.exports = router;
