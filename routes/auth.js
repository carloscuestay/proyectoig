const express = require('express')

const User = require('../models/user')
const create_user = require('../servicios/auth.service.js')
const route_auth = express.Router()


route_auth.post('/register', async (req, res) => {

    const user_respuesta = await create_user(req.body)
    //console.log('mi cuerpo',req.body); es pafra probar que recibio la peticion
    res.json(user_respuesta)
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