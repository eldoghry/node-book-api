import * as dbConnection from '../db/dbConnection.js'

const getAllBooks = async (req, res) => {
    try {
        const books = await dbConnection.query('select * from books')
        res.status(200).send(JSON.stringify(books))
    } catch (error) {
        throw error
    }
}

const getBook = (req, res) => res.send('get one Book')
const createBook = (req, res) => res.send('create one Book')
const updateBook = (req, res) => res.send('update one Book')
const deleteBook = (req, res) => res.send('delete one Book')

export default {
    getAllBooks, getBook, createBook, updateBook, deleteBook
}