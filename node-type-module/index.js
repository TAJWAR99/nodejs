import express from "express";
import bodyParser from "body-parser";
import usersRoute from "./routes/user.js";


const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.use('/users', usersRoute)


app.listen(PORT, ()=> {
    try {
        console.log(`Server is listening at port ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})