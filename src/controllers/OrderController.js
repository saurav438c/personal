const { count } = require("console")
const authorModel= require("../models/orderModel")
const BookModel = require("../models/ProductModel")
const UserModel= require("../models/userModel")
const mongoose= require("mongoose")

const createOrder = async function (req, res) {
    let data = req.body
    let userId = data.UserId
    let ProductId = data.ProductId
    let header=req.headers["isfreeappuser"] || req.headers["isFreeAppUser"]
    console.log(header)
    req.anything = "everything"
    if(!header) { return res.send({msg: 'isFreeAppUser is mandatory in the request'})
}
res.header({"isFreeAppUser":false})
if(!userId){ return res.send({msg: 'userId is mandatory in the request'})
}
if(!mongoose.isValidObjectId(userId)){

    return res.send({status:false,msg:"Pls enter valid Usrid"})
   }
       let author= await UserModel.findById(userId)
       if(!author){
           return res.send({status:false,msg:"Details Not Present"})
       }
/*if(!ProductId){ return res.send({msg: 'ProductId is mandatory in the request'})
}*/
if(!mongoose.isValidObjectId(ProductId)){

    return res.send({status:false,msg:"Pls enter valid Productid"})
   }let Product= await BookModel.findById(ProductId)
   if(!Product){
       return res.send({status:false,msg:"Details Not Present"})
   }
   let productDetail = await BookModel.findById(ProductId);
   //console.log(productDetail)
   let priceValue = productDetail.price
   //console.log(priceValue)
   let userDetail = await UserModel.findById(userId)
   //console.log(userDetail)
   let userBalance = userDetail.balance;
   //console.log(userBalance)
   if(header === "false"){
    if(userBalance > priceValue){
        let updatedBalance = await UserModel.findByIdAndUpdate(
            {_id: userId},
            {$inc: {balance: -priceValue} },
            {new: true}
        )
        data.amount = priceValue;
        data.isFreeAppUser = false
        let orderDetail = await authorModel.create(data)
        res.send({order: orderDetail})
    }
    else{
        res.send({error: "insufficient balance"})
    }
}
else{
    data.amount = 0;
    data.isFreeAppUser = true
    let orderDetails = await OrderModel.create(data);
    res.send({order: orderDetails})
}
}


/*if(header=='false'){
    let ProductPrice=Product.price
    let UserBalance=ProductPrice["balance"]
   
    if(UserBalance >ProductPrice ){
        let UserNewBalance= userBalance-ProductPrice
        await UserModel.findOneAndUpdate(
            {_id:userId},
            {$set:{balance:UserNewBalance}}
            );
           data['amount']=productPrice;
           data['isFreeAppUser']=false;
           let Data= await authorModel.create(data)
           res.send({data: Data})
    }
    else{
        return res.send({msg:"user balance is low"})
    }

   }
   else if(header=="true"){
    data['amount']=0;
           data['isFreeAppUser']=true;
           let Data= await authorModel.create(data)
           res.send({data: Data})

   }
}*/

      /* let = await BookModel.findById(ProductId)
       if(!author){
           return res.send({status:false,msg:"Details Not Present"})
       }*/
 

 

    
    
   /* let savedData= await authorModel.create(data)
    res.send({data: savedData})
}*/

module.exports.createOrder= createOrder
