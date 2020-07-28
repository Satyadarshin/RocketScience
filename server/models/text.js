const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },  
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Author'
    }
});

const Text = mongoose.model('Text', textSchema);

module.exports = Text;