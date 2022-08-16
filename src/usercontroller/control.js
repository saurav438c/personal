const BookModel= require("../book/schema")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const booklist= async function (req, res) {
    
    
    
    let list= await BookModel.find({BookName,AuthorName});
    
    res.send({msg: list})
}

module.exports.createBook= createBook
module.exports.booklist= booklist