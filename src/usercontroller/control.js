const { trusted } = require("mongoose")
const bookModel= require("../book/schema")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const booklist= async function (req, res) {
    
    
    
    let allBook= await bookModel.find({},{BookName:true,AuthorName:true,_id:0})
  
    res.send({msg: allBook})
}
const getBooksInYear=async function (req, res) {
    let years=req.params.Year
    let BookYear= await bookModel.find({Year:{$eq:years}})
    res.send({msg:BookYear})

    }
    const getXINRBooks=async function (req, res) {
        let BookYear= await bookModel.find({"prices.indianPrice":{$in :["20","100","1000"]}})
        res.send({msg:BookYear})
    }
    const getParticularBooks=async function (req, res) {
        
        let BookYear= await bookModel.find ({ Year : 1971, bookName: "soul" } ) 
        res.send({msg:BookYear})
    }

    const  getRandomBooks  =async function (req, res) {
        let BookRan= await bookModel.find( {$or : [ { stockAvailbale: false} , { totalpages :{ $gt: 1000} }  ] })

        res.send({msg:BookRan})
    }




module.exports.createBook= createBook
module.exports.booklist= booklist
module.exports.getBooksInYear= getBooksInYear
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks
module.exports.getParticularBooks= getParticularBooks