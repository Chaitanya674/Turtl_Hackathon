require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const eventRoutes = require('./routes/events')

// express app 
const app = express()

//middleware
app.use(express.json())

app.use((req , res , next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/api/event" , eventRoutes)


//connect to the mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        app.listen(process.env.PORT, () => {
            console.log('listening on port 4000 !!!' , process.env.PORT)
        }) 
    })
    .catch((error) => {
        console.log(error.message)
    })
