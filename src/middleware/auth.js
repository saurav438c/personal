
const jwt = require("jsonwebtoken")


const mid1=function(req,res,next){
    let token1 = req.headers["x-auth-token"]
    if(!token1){
        res.send("Header IS MANDATORY")
    }
   /* let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "Plutonium",
          organisation: "FunctionUp",
        },
        "functionup-plutonium-very-very-secret-key"
      );
      res.setHeader("x-auth-token", token);
      res.send({ status: true, token: token});*/
    
    
     let decodedToken = jwt.verify(token1
        , "functionup-plutonium-very-very-secret-key");
    if (!decodedToken){
      return res.send({ status: false, msg: "token is invalid" })
        
    }


    else{
       // ["x-auth-token"]=token1
        next()
    }
}



module.exports.mid1=mid1