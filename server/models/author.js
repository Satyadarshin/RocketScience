const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
  born: Date,
  died: Date,
  biography: String,
  website: [  {LinkText: String, url: String} ],
  gender: String,
  ethnicity: String,
  origin: String,   
});

const Authors = mongoose.model('Author', authorSchema, 'Authors');

module.exports = Authors;