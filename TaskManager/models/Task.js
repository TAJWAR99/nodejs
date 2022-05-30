const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
    {
    //name:String, completed:Boolean
    //validate data
    name: {
        type:String,
        required: [true, 'name must be provided'],
        trim: true,
        maxlength: [20, 'length cannot be more than 20'],
    },
    completed: {
        type: Boolean,
        default: false,
    }
    }
)

module.exports = mongoose.model('Task', TaskSchema )