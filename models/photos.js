const mongoose = require('mongoose')
//Estructura de la BD NoSQL
const photo_schema = mongoose.Schema({
    user_photos:
    {
        type: String,
        require: true,
        min: 6,
        max: 25
    },
    name_photo: 
    {
        type: String,
        require: true,
        min: 6,
        max: 20
    },
    fechacargue_photo: 
    {
        type: String,
        require: false,
        min: (8),
        max:(10)
    },
    url_photo: 
    {
        type: String,
        require: true,
        min: 25,
        max: 256
    }
})
//Exportar el modelo para uso global
module.exports = mongoose.model('photos', photo_schema)