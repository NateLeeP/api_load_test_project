const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../app/db.sqlite3'
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
        await sequelize.models.User.sync({ force: true })
        console.log("Successfully connected")
    } catch (error) {
        console.error("Unable to connect", error)
    }

    try {
        const nate = User.build({ name: 'Nate', favoriteColor: 'blue', age: 28, cash: 100 })
        await nate.save()
        console.log('Saved nate')
    } catch (error) {
        console.error(error)
    }
}


main()