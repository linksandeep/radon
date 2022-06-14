
const mongoose = require('mongoose');
const ObjectId =mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {

    NewuserId:{
        type:ObjectId,
        ref :"Newuser"
    },
    productId:{
        type:ObjectId,
        ref :"Product"
    },
    amount:{
        type: Number,
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    },
    date:{
        type:String
    }
},{ timestamps: true });

module.exports = mongoose.model('Order', orderSchema) //users

