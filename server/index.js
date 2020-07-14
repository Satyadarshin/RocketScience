const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const authors = require('./routes/api/authors');

app.use('/api/authors', authors);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
