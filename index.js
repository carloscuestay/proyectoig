const  express = require('express')

const auth = require('./routes/auth')// constante para enviar las rutas a auth.js
require('dotenv').config() //es la importancion del la dependencia para configurar variables de entorno en archivo .env
require('./database/db')// vinculo el archivo db.js para la configuracion de conexio a BD mongo

const User = require('./models/user')//creo la tabla en el modelo segun schema
const mi_user = 
{
    name: 'Carlos Cuesta',
    email: 'carloscuestay@gmail.com',
    celular: '3156792900',
    password: 'Cacy73181'
}

new User(mi_user).save()

//de aqui en adelante el framenworkexpress
const app = express()

/*app.get('/', (req, res) => {
    res.json({
        ok:true 
    })
})*///aqui se elimina este endpoint para mandarlo al archivo de rutas y se usa el siguiente middleware

app.use('/api',auth)// middleware

const port = process.env.PORT || 3200

app.listen(port, ()=> console.log(`servidor corriendo en el puerto ${port}`))