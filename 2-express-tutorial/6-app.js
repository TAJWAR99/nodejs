const express = require('express');
const app = express()

const { people } = require('./data')

app.use(express.static('./methods-public'))

//parse from data
app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json())

//GET data
app.get('/api/people', (req,res) => { 
    res.status(200).send({success:true, data:people})
})

//POST data
app.post('/api/people', (req,res) => {
    //console.log(req.body)
    const { name } = req.body
    if(!name){
        return res.status(401).json({success:false, msg: 'Please provide a name'}) //msg is used in js file
    }
    //res.status(201).send('Success')
    res.status(200).json({success:true, person:name}) //person is used in js file
})

//UPDATE data
app.put('/api/people/:id', (req,res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if(!person){
        return res.status(404).json({success:false, msg:`No person with id ${id}`})
    }

    const newPerson = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data: newPerson})
})

//DELETE data
app.delete('/api/people/:id', (req,res) => {
    const { id } = req.params
    const person = people.find((person) => person.id === Number(id))

    if(!person){
        return res.status(404).json({success:false, msg:`No person with id ${id}`})
    }

    const newPeople = people.filter((person) => person.id != Number(id))
                  
    res.status(200).json({success:true, data: newPeople})
})



app.listen(3001, () => {
    console.log('3001 listening')
})

