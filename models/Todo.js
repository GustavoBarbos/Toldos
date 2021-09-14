const { Schema, model } = require('mongoose')

const TodoSchema = new Schema(

    {

        title: String,
        completed : { type : Boolean, default: false } 

    },
    {
        timestamps: true
    }

)

module.exports = model('Todo', TodoSchema);