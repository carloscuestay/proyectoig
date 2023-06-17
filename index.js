const  express = require('express')

const auth = require('./routes/auth')// constante para enviar las rutas a auth.js
require('dotenv').config() //es la importancion del la dependencia para configurar variables de entorno en archivo .env



const app = express()

/*app.get('/', (req, res) => {
    res.json({
        ok:true 
    })
})*///aqui se elimina este endpoint para mandarlo al archivo de rutas y se usa el siguiente middleware

app.use('/api',auth)// middleware

const port = process.env.PORT || 3200

app.listen(port, ()=> console.log(`servidor corriendo en el puerto ${port}`))