const mysql = require('mysql2/promise')
const mysqli = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb',
    port: '3306'
})
module.exports = mysqli