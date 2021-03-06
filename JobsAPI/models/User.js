const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide name'],
        minlength:3,
        maxlength:50
    },
    email:{
        type:String,
        required:[true, 'Please provide email'],
        match:[
            /^(([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$))/,
            'Please provide valid email format'
        ],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'Please provide a password'],
        minlength:6,
    }
})

UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function(){
    return jwt.sign(
        { userId : this._id, name:this.name},
        process.env.JWT_SECRET,
        { expiresIn : process.env.JWT_LIFETIME}
    )
    //expiresIn: "20d" // it will be expired after 20 days
    //expiresIn: 120 // it will be expired after 120ms
    //expiresIn: "120s" // it will be expired after 120s
}

UserSchema.methods.comparePassword = async function(candidatePass){
    const isMatch = await bcrypt.compare(candidatePass, this.password)
    return isMatch
}


module.exports = mongoose.model('User', UserSchema)