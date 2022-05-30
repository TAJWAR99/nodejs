const Product = require('../models/productSchema')

const getAllProductsStatic = async (req,res)=> {
    //showcase specific attribute
    // const products = await Product.find({}).select('name price').limit(4)
    // const search = 'ab'
    // const products = await Product.find({
    //     name: {$regex:search, $options:'i'}
    // })
    const products = await Product.find({price: {$gt : 30}}).sort('price')
    res.status(200).json({products, nbHits: products.length})
    //throw new Error('Testing async error')
    // const products = await Product.find({})
    // res.status(200).json({products})
} 

const getAllProducts = async (req,res)=> {
    const { featured, company, name, sort, fields, numericFilter } = req.query
    const objectQuery = {}
 
    if(featured){
        objectQuery.featured = featured === 'true' ? true : false
    }
    if(company){
        objectQuery['company'] = company
    }
    if(name){
        objectQuery.name = {$regex:name, $option:'i'}
    }
    if(numericFilter){
        const operatorMap = {
        '>' : '$gt',
        '>=' : '$gte',
        '<' : '$lt',
        '<=' : '$lte',
        '=' : '$eq'
        }
        const regEx = /\b(<|<=|=|>|>=)\b/g
        let filter = numericFilter.replace(regEx, (match)=> `-${operatorMap[match]}-`)
        console.log(filter)
        const options = ['price', 'rating']
        filter = filter.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-') 
            if(options.includes(field)){
                objectQuery[field] = {  [operator] : Number(value) }
            }
        })
    }

    console.log(objectQuery)
    
    let result = Product.find(objectQuery)
    if(sort){
        const sortList = sort.split(',').join(' ')
        console.log(sortList)
        result = result.sort(sortList)
    }else{
        result = result.sort('createdAt') 
    }

    if(fields){
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }


    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    //console.log(page, limit)
    const skip = (page - 1) * limit
    //23 items
    //4 page --> 7 7 7 2
    result = result.skip(skip).limit(limit)

    const products = await result

    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}