const express = require('express')

const User = require('../models/user')
const {create_user, login_user } = require('../servicios/auth.service.js')
const route_auth = express.Router()


route_auth.post('/register', async (req, res) => {

    const user_respuesta = await create_user(req.body)
    //console.log('mi cuerpo',req.body); es pafra probar que recibio la peticion
    res.json(user_respuesta)
} )

route_auth.post('/login', async (req, res) => {
    const respuesta = await login_user(req.body)
    res.json(respuesta)
} )

module.exports = route_auth //aqui exporto la vairable para quela puedan usar otros archivos

