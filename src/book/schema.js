const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
    BookName: String,
    AuthorName: String,
    Year: {
        type: String,
        unique: true,
        required: true
    },
    category: String
},
 { timestamps: true });

module.exports = mongoose.model('UserB', BookSchema)
