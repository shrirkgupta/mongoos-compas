const mongoose= require('mongoose')

const userschema= mongoose.Schema({
    name : String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:String
})

module.exports =mongoose.model('users',userschema)