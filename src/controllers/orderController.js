const orderModel = require("../models/orderModul");

const createOrder = async function (req,res){
  let order=req.body
  let product=req.body.productId
  let user=req.body.NewuserId
  if(product==undefined || user==undefined){res.send({msg:"id undefined"})}
  else if(product==null || user==null){res.send({msg:"invalid input"})}
  else{
  let orderData= await orderModel.create(order)
  res.send({data:orderData})}
}

module.exports.createOrder=createOrder