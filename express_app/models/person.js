const { Sequelize, DataTypes } = require('sequelize');
const { options } = require('../routes/person');

const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: '../../app/db.sqlite3'
    }
)
const Person = sequelize.define('Person', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
}, {
    tableName: 'person',
    timestamps: false
})



module.exports = sequelize