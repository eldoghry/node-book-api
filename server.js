import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import bookRouter from './router/book.router.js'
dotenv.config()
// const express = require('express')
// const cors = require('cors')
// const pool = require('./db/pool')
// const bookRouter = require('./router/book.router')
// const client = require('./db/query')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.get('/', (req, res) => res.send('hello'))
app.all('/books', bookRouter)

// const db = pool.connect();
// client.query('select * from test where id = $1', [2]).then(res => console.log(res.rows));

app.listen(PORT, () => console.log(`Listening http://localhost:${PORT}`))