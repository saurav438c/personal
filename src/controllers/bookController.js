//const authorModel = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const mongoose= require("mongoose")
const PublisherModel = require("../models/PublisherModel")

const createBook= async function (req, res) {
   let data= req.body
    let authorId=data.author
    let publishId=data.publisher
    
    if(!authorId){
        return res.send({status:false,msg:"Details Required"})
    }
if(!mongoose.isValidObjectId(authorId)){

 return res.send({status:false,msg:"Pls enter valid id"})
}
    let author= await authorModel.findById(authorId)
    if(!author){
        return res.send({status:false,msg:"Details Not Present"})
    }
    
    let publisher=await PublisherModel.findById( publishId)
    if(!publisher){
        return res.send({status:false,msg:"Publisher Not Present"})
    }
    let bookCreated = await bookModel.create(data)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {

    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {

    let specificBook = await bookModel.find().populate(['author','publisher'])
    res.send({data: specificBook})
}
const Books = async function (req, res){
    let book2 = await PublisherModel.find({ name :{$in: ['Penguin','Harper Collins']}})
    let a = book2.map(x => x._id)     
    let requireBook = await bookModel.updateMany({publisher:{$in: a}}, {$set: {isHardCover: true}})

    res.send({msg: requireBook})
}
const rating= async function (req, res){
    //let book2 = await PublisherModel.find({ name :{$in: ['Penguin','Harper Collins']}})
    //let a = book2.map(x => x._id)     
    let c= await authorModel.find({ratings:{$gt:2.5}})
    let a = c.map(x => x._id) 
    let requireBook = await bookModel.updateMany({author:{$in: a}},{$inc:{price:50}},{new:true})

    res.send({msg: requireBook})
}

/*const Books= async function (req, res) {
    //let data=req.body
    
   // let publisher="62ff67e30eb49532d3e5a46d"
    //let publishId=data.publisher
    let books = await bookModel.findOneAndUpdate({_id:"62ffafd98117384f50e466bb"},{$set:{isHardCover:true}},{new:true})
    
    //{publisher:"62ffafd98117384f50e466bb"},{$set:{isHardCover:true}},{new:true})
   // console.log(books)
    res.send({data: books})
}*/

 



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.Books=Books
module.exports.rating=rating