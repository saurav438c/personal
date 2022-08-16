const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
    BookName: {
        type:String,
        unique:true,
        required:true
    },
    AuthorName: String,
    Year:{type:Number,default:2021},
    tags:[String],
    prices:{
        indianPrice:String,
        europePrice:String
    },
    totalpages:Number,
    stockAvailbale:Boolean
    
},
 { timestamps: true });

module.exports = mongoose.model('Book', BookSchema)
