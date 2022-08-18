
const BookModel= require("../models/bookModel")
const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let authorId=data.author_id
    if(!authorId){
        return res.send({status:false,msg:"not present"})
    }
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let findauthor= await UserModel.find({author_name:"Chetan Bhagat"})
    let authorid=findauthor.author_id
    let findbook=await BookModel.find({author_id:authorid}).select({name:1,_id:0})
    res.send({msg:findbook})
}
    //console.log(allBooks)
    //if (allBooks.length > 0 ) 
     //res.send({msg: allBooks, condition: true})
    // res.send({msg: "No books found" , condition: false})

const update= async function (req, res) {
    let bookprice= await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let updateprice=bookprice.price
    let authorupdate=await UserModel.find({author_id:{$eq:bookprice.author_id}}).select({author_name:1,_id:0})
    res.send({authorupdate,updateprice})
}


const price= async function (req, res) {
    let id= await BookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } )
    res.send({msg:id})
}

const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const Books= async function (req, res) {
    // let data = req.body 
    let range= await BookModel.find({price:{$gte:50,$lt:100}})
    let a=range.map(x=>x.author_id)
    let newrange=await UserModel.find({author_id:a}).select({author_name:1,_id:0})
    res.send(newrange)
        /*{ authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})*/
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.Books= Books
module.exports.update= update
module.exports.price= price  
