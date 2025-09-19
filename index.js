const express = require('express')
const app = express()
const mysqli = require('./config/mysqli.connect.js')
const port = 3000
app.use(express.json())
app.use(express.static('public'))
app.use(require('./Routes/routes.js'))

// Check MySQL connection
async function checkDbConnection() {
    try {
        const conn = await mysqli.getConnection();
        await conn.ping();
        conn.release();
        console.log('MySQL connected successfully.');
    } catch (err) {
        console.error('MySQL connection failed:', err.message);
    }
}

app.listen(port, () => {
    console.log(`app on http://localhost:${port}`)
    checkDbConnection();
})