const mongoose = require('mongoose');

const userObj= new mongoose.Schema( {
    Name: String,
    balance: {type:Number ,default:100},
    
    address: String,
    gender: {
        type: String,
        enum: ["male", "female", "others"] 
    },
    age: Number,
    isFreeAppUser:{type:Boolean,default:false}
    
})//{ timestamps: true });

module.exports = mongoose.model('UserDoc', userObj) //users



// String, Number
// Boolean, Object/json, array