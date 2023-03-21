require('dotenv').config()
const express = require('express')
const cors = require('cors')
const pool = require('./db/pool')
// const client = require('./db/query')



const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.get('/', (req, res) => res.send('hello'))


const db = pool.connect();
// client.query('select * from test where id = $1', [2]).then(res => console.log(res.rows));

app.listen(PORT, () => console.log(`Listening http://localhost:${PORT}`))