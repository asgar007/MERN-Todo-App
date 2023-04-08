const mongoose = require('mongoose');

//make schema
const TodoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//making collections
const todo = mongoose.model('todo', TodoSchema);

module.exports = todo;