import express from 'express'
import bookController from '../controller/book.controller.js'

const router = express.Router()
// router.route('/books');

router.get(bookController.getAllBooks)
router.get('/:id', bookController.getBook)
router.post('/:id', bookController.createBook)
router.patch('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)


export default router;