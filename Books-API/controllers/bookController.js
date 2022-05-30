let { books } = require('../book')

const getAllBooks = (req,res) => {
    //res.send('Hello')
    res.status(200).json({success:true, data:books})
}

const getBookById = (req,res) => {
    console.log(req.params)
    const { id } = req.params
    const findBook = books.find((book) => book.id === Number(id))
    res.status(200).json({success:true, book:[findBook]})
}

const getBookQuery = (req,res) => {
    console.log(req.query)
    const { available, type } = req.query
    let findBooks = [...books]
    if(type){
        findBooks = findBooks.filter((book) => book.type === type)
    }
    if(available){
        findBooks = findBooks.filter((book) => book.available === Boolean(available))
    }
    res.status(200).json({success:true, data:[findBooks]})
}

const createBook = (req,res) => {
    const { type } = req.body
    console.log(req.body)
    const newBook = [{
        "id": 7,
        "name": "New Book",
        "type": type,
        "available": true
    }] 
    books = books.concat(newBook)
    res.status(201).json({success:true,data:[books]})
}

const updateBook = (req,res) => {
    const { id } = req.params
    const { available } = req.body

    let newBook = books.find((book) => book.id === Number(id))

    if(newBook){
        newBooks = books.map((book) => {
            if(book.id === Number(id)){
                book.available = Boolean(available)
            }
            return book
        })
    }else{
        return res.status(404).json({success:false, msg:`No person with id ${id}`})
    }
    console.log(req.params, req.body)
    res.status(200).json({success:true, data:[newBooks]})
    
}

const deleteBook = (req,res) => {
    const { id } = req.params
    console.log(req.params)

    const bookID = books.find((book) => book.id === Number(id))
    
    if(bookID){
        for(let i = 0; i < books.length; i++){
            if(books[i].id === Number(id)){
                books.splice(i,i)
            }
        }
    }
    res.status(200).json({success:true, data:[books]})
}

module.exports = {
    getAllBooks,
    getBookById,
    getBookQuery,
    createBook,
    updateBook,
    deleteBook
}