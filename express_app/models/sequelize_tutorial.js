const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '/home/npruitt/repos/api_load_test_project/db.sqlite3'
})

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        field: 'name',
    },
    favoriteColor: {
        type: DataTypes.STRING,
        field: 'favorite_color',
        defaultValue: 'green'
    },
    age: {
        type: DataTypes.INTEGER
    },
    cash: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'users',
    timestamps: false
})

const Person = sequelize.define('Person', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'person',
    timestamps: false
})

async function main() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log("Successfully connected and synced")
        const persons = await Person.findAll()
        console.log(persons)
    } catch (error) {
        console.error("Unable to connect", error)
    }
}

module.exports =  sequelize