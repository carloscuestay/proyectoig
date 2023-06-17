const mongoose = require('mongoose')// driver mongo

mongoose.connect('mongodb+srv://ig_cacy:TH9OajAEOMao3nGv@proyectoigdb.lh0hsiu.mongodb.net/')//conexxion a mongo
.then(()=> console.log('Base de Datos Corriendo'))//como es asincrono se usa then para hacer seguimiento
.catch((e) => console.log('Error en la Base de Datos'+e.message)) // capturar el error