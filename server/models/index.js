const mongoose = require('mongoose');
const Authors = require('./author');
const Text = require('./text');

module.exports = {
    connectDb: function() {
        return mongoose.connect(process.env.VUE_APP_MONGODB_CNCT+'Dragon', {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }, 
        err => {console.log('Connect function returns: ' + err)});
    },
    models: {
        Authors, 
        Text
    }
}