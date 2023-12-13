

const express = require('express')
const Cyclist_routes = require('./routers/Cyclist')
const Cyclist_type_routes = require('./routers/Cyclist_type')



const app = express()


app.set('port', process.env.PORT || 3000)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api/Cyclist', Cyclist_routes)
app.use('/api/Cyclist_type', Cyclist_type_routes)


module.exports = app