const express = require('express')
const sequelize = require('../models/person.js')
const router = express.Router()

router.get('/', async function (req, res) {
    const persons = await sequelize.models.Person.findAll()
    console.log(persons)
    res.send({'name': "Nathaniel", "id": 1})
})



// pattern stolen from express routing
module.exports = router