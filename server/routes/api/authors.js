const express = require('express');
const mongoose = require('mongoose');
const {connectDb, models} = require('../../models');
connectDb();
const db = mongoose.connection;
const router = express.Router();

// console.log(db);
db.on('error', console.error.bind(console, 'Connection error:'))
db.once('open', ()=> {
  console.log('Successful connection to MongoDB')
})

// attempt to Get authors via Mongoose
// Without this block the proxy from vue to express doesn't work.
// But reading various docs and articles 
router.get('/', async (req, res) => {
  const query = req.query;
  console.log(req.query) //Logs the query parameters: at time of writing, I get an empty object
  try {
    res.send(await models.Authors.find(query, function (err, author) {
      if (err) return console.error(err)
      console.log(author) //Logs the query results, which currently just returns an empty array
    }));
  } catch (err) {
    return console.log(err)  
  }
});

// Get authors by vanilla MongoDB

// router.get('/', async (req, res) => {
//   const query = req.query;
//   try {
//     const authors = await loadAuthorsCollection();
//     console.log(authors);
//     res.send(await authors.find(query).toArray());
//   } catch (error) {
//     return console.log(error)  
//   }
// });

// async function loadAuthorsCollection() {
//   // const client = await connectDb.MongoClient.connect(
//   //   );
//   db().then(async () => {
//   express.listen(process.env.PORT, function() {
//     console.log('in');
//   })
//   });
//   // return client.db('Dragon').collection('Authors');
// }

module.exports = router;
