const express = require('express')
const app = express()
const personRouter = require('./routes/person')

// Even this can be considered "middleware" - since it has access to request and respons
// It is the end of the stack because there is no 'end'. 
app.get('/', function (req, res) {

    res.send({"name": "Nate P"})
})

app.use('/person', personRouter)

app.listen(3000, () => {
    console.log("Listening at port 3000!")
})