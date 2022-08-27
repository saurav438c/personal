const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    UserId:{
        type:ObjectId,
        ref:"UserDoc"
    },
    ProductId: {
        type:ObjectId,
        ref:"Product "
    },
    amount: Number,
    isFreeAppUser:Boolean,
    


}) //{ timestamps: true });

module.exports = mongoose.model('order', orderSchema)
