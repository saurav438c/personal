const BookModel= require("../book/schema")

const BookUser= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getUsersBook= async function (req, res) {
    let allUsers= await BookModel.find()
    res.send({msg: allUsers})
}

module.exports.BookUser= BookUser
module.exports.getUsersBook= getUsersBook