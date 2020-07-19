require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const authors = require('./routes/api/authors');

app.use('/api/authors', authors);

// Handle production
if(process.env.NODE_ENV === 'production') {
    // Set the static folder
    app.use(express.static(__dirname + '/public'));

    // Handle the SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
