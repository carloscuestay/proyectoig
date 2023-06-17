const express = require('express')


const route_auth = express.Router()

route_auth.post('/register', (req, res) => {
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