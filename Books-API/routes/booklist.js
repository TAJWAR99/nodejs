const express = require('express')
const router = express.Router()

const { 
    getAllBooks,
    getBookById,
    getBookQuery,
    createBook,
    updateBook,
    deleteBook } = require('../controllers/bookController') 

//GET req
router.get('/', getAllBooks)

router.get('/:id', getBookById)

router.get('/query/search', getBookQuery)

//POST req --> Create
router.post('/', createBook)

//PUT req --> Update
router.put('/:id', updateBook)

//DELETE req
router.delete('/:id', deleteBook)

module.exports =  router 