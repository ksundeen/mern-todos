const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create new schema structure in mongodb
let todoSchema = new Schema({
    task: {
        type: String
    }
}, {
    collection: 'todos'
})

module.exports = mongoose.model('Todo', todoSchema);