const Sequelize = require("sequelize")

const connection = new Sequelize('blogBD', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})


module.exports = connection