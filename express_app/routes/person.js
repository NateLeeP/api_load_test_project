const express = require('express')
const sequelize = require('../models/sequelize_tutorial.js')
const router = express.Router()

router.get('/', async function (req, res) {
    const persons = await sequelize.models.Person.findAll()
    res.status(200).send(persons)
})

router.get('/:id', async function (req, res) {
    const persons = await sequelize.models.Person.findAll({ where: {
        id: req.params.id
    }})
    res.status(200).send(persons)
})

router.post('/', async function (req, res) {
    body = req.body
    const person = await sequelize.models.Person.create({name:body['name']})
    res.status(201).send(person)
})



// pattern stolen from express routing
module.exports = router