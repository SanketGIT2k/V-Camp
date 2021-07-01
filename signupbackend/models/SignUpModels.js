const mongoose = require('mongoose')

const signupTemplate = new mongoose.Schema({
    FullName:{
        type : String,
        required: true
    },
    UserName:{
        type:String,
        required: true
    },
    emailid:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    pin:{
        type:Number,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model('mytable',signupTemplate)