const express = require('express')

const route_auth = express.Router()





route_auth.post('/register', (req, res) => {
    console.log('mi cuerpo',req.body);
    res.json({
        message: 'Estoy en el resgister'
    })
} )

route_auth.get('/login', (req, res) => {
    res.json({
        message: 'Estoy en el login'
    })
} )

module.exports = route_auth //aqui exporto la vairable para quela puedan usar otros archivos

/* const User = require('./models/user')//creo la tabla en el modelo segun schema
const mi_user = 
{
    name: 'Carlos Cuesta',
    email: 'carloscuestay@gmail.com',
    celular: '3156792900',
    password: 'Cacy73181'
}

new User(mi_user).save() */