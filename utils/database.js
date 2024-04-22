const Sequelize = require('sequelize');

const sequelize = new Sequelize('cricket','root','ROOT',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;
