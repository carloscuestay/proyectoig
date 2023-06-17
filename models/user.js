const mongoose = require('mongoose')
const user_schema = mongoose.Schema({
    name: 
    {
        type: String,
        require: false,
        min: 3,
        max: 256
    },
    email: 
    {
        type: String,
        require: true,
        min: 3,
        max: 256
    },
    celular:
    {
        type: String,
        require: false,
        min: 10,
        max: 10
    },
    password:
    {
        type: String,
        require: true,
        min: 3,
        max: 256
    },
    create_at:
    {
        type: String,
        default: Date.now
    }


})