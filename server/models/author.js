const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  // "id": 100,
  name: String,
  born: Date,
  died: Date,
  biography: String,
  website: [  {LinkText: String, url: String} ],
  gender: String,
  ethnicity: String,
  origin: String,
  // texts: [ 1000 ]   
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;