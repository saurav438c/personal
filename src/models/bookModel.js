const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
   
    
    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
    

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
