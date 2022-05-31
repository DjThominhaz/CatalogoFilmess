import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
    user: process.env.MYSQL_USER,
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB
})

console.log("DB Conectado !")

export {con}