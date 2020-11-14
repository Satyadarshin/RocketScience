/**
 * Express app setup goes here.
 */
const cors = require('cors');
const express = require('express');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const authors = require('./routes/api/authors');
app.use('/api/authors', authors);

// Handle production
if(process.env.NODE_ENV === 'production') {
    // Set the static folder
    app.use(express.static(__dirname + '/public'));

    // Handle the SPAdefault
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

module.exports = app;
