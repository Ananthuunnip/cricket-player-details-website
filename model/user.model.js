const Sequelize = require('sequelize');
const sequelize = require('../utils/database');


const playerdata = sequelize.define('players', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dob: {
        type: Sequelize.STRING,
        allowNull: false
    },
    photourl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthplace: {
        type: Sequelize.STRING,
        allowNull: false
    },
    career: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nomatch: {
        type: Sequelize.STRING,
        allowNull: false
    },
    score: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fifties: {
        type: Sequelize.STRING,
        allowNull: false
    },
    century: {
        type: Sequelize.STRING,
        allowNull: false
    },
    wickets: {
        type: Sequelize.STRING,
        allowNull: false
    },
    average: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
module.exports = playerdata;