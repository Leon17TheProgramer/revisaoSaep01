const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('concessionaria','root','',{
    host: 'localhost',
    dialect: 'mysql',
})