const express = require('express')
const mongoose = require('mongoose');

const config = require('./config/config')
const utils = require('./utlis')

/*
    MONGOOSE CONNECT
*/

mongoose.connect(config.MONGODB)



const app = express()

require('./routes')(app)





const db = mongoose.connection


db.on('error',
        console.error.bind(console, 'MongooDB conection error')
    )


db.once('open', ()=>{
    const mongoStatus = mongoose.connection.readyState
    
    console.log('Database Status: ', utils.checkDBStatus(mongoStatus))

})

app.listen(config.PORT , ()=>{
    
    console.log('Server running at port: ' + config.PORT)
    
})