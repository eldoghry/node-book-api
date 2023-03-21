const getAllBooks = (req, res) => res.send('get all Books')
const getBook = (req, res) => res.send('get one Book')
const createBook = (req, res) => res.send('create one Book')
const updateBook = (req, res) => res.send('update one Book')
const deleteBook = (req, res) => res.send('delete one Book')

export default {
    getAllBooks, getBook, createBook, updateBook, deleteBook
}