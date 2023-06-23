const  express = require('express')
const auth = require('./routes/auth')// constante para enviar las rutas a auth.js
const photo = require('./routes/photo')// constante para enviar las rutas a photo.js
const body_parser = require('body-parser')
require('dotenv').config() //es la importancion del la dependencia para configurar variables de entorno en archivo .env
require('./database/db')// vinculo el archivo db.js para la configuracion de conexio a BD mongo
//de aqui en adelante el framenworkexpress
const app = express()
app.use(body_parser.json())// middleware para decirle a express que reciba en la peticion post el cuerpo de tipo json
app.use('/api',auth)// middleware
app.use('/api',photo)// middleware
const port = process.env.PORT || 3200
app.listen(port, ()=> console.log(`servidor corriendo en el puerto ${port}`))