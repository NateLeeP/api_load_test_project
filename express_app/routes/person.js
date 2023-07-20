const express = require('express')

const router = express.Router()

router.get('/', function (req, res) {
    res.send({'name': "Nathaniel", "id": 1})
})


// pattern stolen from express routing
module.exports = router