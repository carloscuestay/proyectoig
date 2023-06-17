const  express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.json({
        ok:true 
    })
})

const port = process.env.PORT || 3200

app.listen(port, ()=> console.log(`servidor corriendo en el puerto ${port}`))