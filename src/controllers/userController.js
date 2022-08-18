const UserModel= require("../models/userModel")
const BookModel= require("../models/bookModel")


const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const Author_id1= async function (req, res) {
    let id= await UserModel.find({},{author_id:true,_id:0})
    res.send({msg:id})
}
const chetan= async function (req, res) {
    let id= await (await UserModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ).select({ author_id :true}))
    res.send({msg:id})
}


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.Author_id1= Author_id1
module.exports.chetan= chetan