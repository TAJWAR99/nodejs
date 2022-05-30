const express = require('express');
const { products } = require('./data')

const app = express()

app.get('/', (req,res) => {
    //res.json(products)
    res.end('<h1>Home page</h1><a href="/api/products">products</a>')
})

//show only specific attributes
app.get('/api/products', (req,res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

//parameters
//api/products/:productID
//find a specific product
app.get('/api/products/:productID', (req,res) => {
    //console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find((product) => 
        product.id === Number(productID)
    )
    if(!singleProduct){
        res.status(404).send('Resource not found')
    }
    res.json(singleProduct)
})

//query
//api/v1/query?name=john&id=4
app.get('/api/v1/query', (req,res) => {
    //console.log(req.query)
    const {search,limit} = req.query
    let sortedProducts = [...products]
    //console.log(sortedProducts)

    if(search){
        sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search))
        //console.log(sortedProducts)

    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
        //console.log(sortedProducts)

    }
    if(sortedProducts.length < 1){
        res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProducts)
})

app.all('*', (req,res) => {
    res.status(404).send('Resource not found')
})

app.listen(3001, () => {
    console.log('3001 listening')
})

// app.get
// app.post
// app.put  --> update data
// app.delete
// app.all
// app.use
// app.listen