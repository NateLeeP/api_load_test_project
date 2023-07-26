const express = require('express')
const app = express()
const personRouter = require('./routes/person')
const sequelize = require('./models/person.js')

// Even this can be considered "middleware" - since it has access to request and respons
// It is the end of the stack because there is no 'end'. 

app.use(express.json())
app.use('/person', personRouter)

app.listen(3000, async () => {
    console.log("Listening at port 3000!")
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log("Successfully connected and synced")
        console.log("Connection to sqlite DB been established")
    } catch (error) {
        console.error("Unable to connect")
    }
})