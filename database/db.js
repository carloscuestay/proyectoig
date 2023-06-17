const mongoose = require('mongoose')// driver mongo

const user_db = process.env.USERDB
const pass_db = process.env.PASSDB
const name_db = process.env.NAMEDB
const host_db = process.env.HOSTDB


mongoose.connect(`mongodb+srv://${user_db}:${pass_db}@${name_db}.${host_db}`)//conexxion a mongo
.then(()=> console.log(`Base de Datos Corriendo ${name_db}`))//como es asincrono se usa then para hacer seguimiento
.catch(e => console.log(`Error en la Base de Datos ${e.message}`)) // capturar el error