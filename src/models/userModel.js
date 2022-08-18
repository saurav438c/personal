const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    
        author_id:Number,
        author_name:String,
        age:Number,
        address:String
    },{ timestamps: true });
    
    /*Books:
    { 
        name:string,
        author_id:Number,
        price:Number,
        ratings:Number
    },*/

    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
 //users



 module.exports = mongoose.model('Author',userSchema ) 


// String, Number
// Boolean, Object/json, array