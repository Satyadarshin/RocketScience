const mongoose = require('mongoose');
const Author = require('./author');
const Text = require('./text');

module.exports = {
    connectDb: function() {
        return mongoose.connect(process.env.VUE_APP_MONGODB_CNCT, {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
    },
    models: {
        Author, 
        Text
    }
}