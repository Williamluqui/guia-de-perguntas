
const sequelize = require('sequelize');

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const connection = new sequelize(dbName, dbUser, dbPassword,{
    host: dbHost,
    dialect:'mysql',
    logging: false
});

module.exports = connection;