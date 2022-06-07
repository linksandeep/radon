const { count } = require("console")
const AuthorModel= require("../models/AuthorModel")
const bookModel = require("../models/bookModel")
const BookM= require("../models/bookModel")

//1
const createBookAuthor=async function (req, res) {
    let data= req.body
    let savedData= await  AuthorModel.create(data)
    res.send({msg: savedData})
}


//2
 const BookDetails=async function (req, res) {
    let data= req.body
     let savedBook= await BookM.create(data)
     res.send({msg: savedBook})
 }

 //3
 const Chetan_Bhagat = async function(req,res){
     let data=await AuthorModel.find({author_name:"Chaten Bhagat"}).select("author_id")
      console.log(data)
      let authorData=await AuthorModel.find({author_id:data.author_id}).select("author_name")
     let price=data.prices
     res.send({msg:authorData,price})
 }


 const authorofBook= async function (req, res) {
    let data=await bookModel.findOneAndUpdate({name:"two states"},{$set:{prices:100}},{new:true})
    let authorData=await AuthorModel.find({author_id:data.author_id}.select("author_name"))
    let price= data.prices
       
       res.send( { msg: authorData,price})
  }
  
  



 //5
 const findBook = async function(req,res){
     let findBook=await bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } )  //author name missing 
     res.send({msg:findBook})
 }


 //6
const querying = async function(req,res){
 let data=await bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
 res.send({msg:data})
 }


module.exports.createBookAuthor=createBookAuthor
module.exports.BookDetails=BookDetails
module.exports.Chetan_Bhagat=Chetan_Bhagat
module.exports.findBook=findBook
module.exports.querying=querying
module.exports.authorofBook=authorofBook
