const PublisherModel= require("../models/PublisherModel")

const createPublisher= async function (req, res) {
    let author = req.body
    let authorCreated = await PublisherModel.create(author)
    res.send({data: authorCreated})
}

const PublisherData= async function (req, res) {
    let authors = await PublisherModel.find()
    res.send({data: authors})
}

module.exports.createPublisher= createPublisher
module.exports.PublisherData= PublisherData