const mongoose = require('mongoose');
const Author = require('./author');
const Text = require('./text');

const connectDb = () => {
    return mongoose.connect(process.env.VUE_APP_MONGODB_CNCT);
};

const models = {Author, Text};

//export {connectDb}; this is ES6 so won't work

// export default; {models}; this is ES6 so won't work

module.exports = models;