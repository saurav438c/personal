const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authenticate = async function(req, res, next) {
    try{
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
      return res.status(400).send({ status: false, msg: "token is invalid" });


    //check the token in request header
    //validate this token

    next()
}
catch(err)
{
  console.log("this is error:",err)
  res.status(400).send({msg:"server error",error:err})
}
}

const authorise = async function(req, res, next) {
    try{
    let token = req.headers["x-auth-token"]
    let userToBeModified = req.params.userId
    let decodedToken = jwt.verify(token, "functionup-thorium")
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    let message = req.body.message
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser});

    next()
}
    // comapre the logged in user's id and the id in request

catch(err)
{
  console.log("this is error:",err)
  res.status(500).send({msg:"server error",error:err})
}

}
module.exports.authenticate=authenticate
module.exports.authorise=authorise