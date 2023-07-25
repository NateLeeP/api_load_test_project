const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: '../../app/db.sqlite3'
    }
)
const Person = sequelize.define('Person', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
}, {
    tableName: 'person',
    timestamps: false
})




module.exports = sequelize