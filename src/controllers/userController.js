const UserModel= require("../models/userModel")




const basicCode= async function(req, res, next) {
    let tokenDataInHeaders= req.headers.token
    //console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    //res.send({ msg: "This is coming from controller (handler)"})
    next()
    }

const createUser= async function (req, res) {
    
    let data= req.body
    let tokenDataInHeaders= req.headers.name
    //Get all headers from request
    let savedData= await  UserModel.create(data)
       
    //console.log("Request headers before modificatiom",req.headers)
    //Get a header from request
   //console.log(req.headers.batch) 
   let header=req.headers["isfreeappuser"] || req.headers["isFreeAppUser"]
   //header=JSON.parse(JSON.stringify(header))
   //console.log( header)

   console.log(header)
   //console.log(tokenDataInHeaders)
    //Set a header in request
   //req.headers['isFreeAppUser']='false' //req.headers.month = "June"

    //Set an attribute in request object
    req.anything = "everything"
    
    
    //console.log("Request headers after modificatiom",req.headers)
    
    //Set a header in response
    
  
    if(!header) { return res.send({msg: 'isFreeAppUser is mandatory in the request'})
 }
 res.header({"isFreeAppUser":false})
 
    res.send({msg:savedData})
}
  
  



const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode