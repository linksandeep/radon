const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createBook= async function (req, res) {
    let book1=req.body
    let autId = req.body.author_id
    let publId=req.body.publisher_id
    //console.log(autId)
    let authorfinder=await authorModel.findOne({_id:autId})
    let publisherfinder=await publisherModel.findOne({_id:publId})
    if(!autId==undefined || publId==undefined){res.send({msg:"authorID and publisherID are required"})}
    else if (autId ==null || publId==null){res.send({msg:"invalid input"})}
    else
    {
    let bookCreated = await bookModel.create(book1)
    res.send({data: bookCreated})}
}

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find().populate('nauthor')
//     res.send({data: books})
//     let publisherpojectid = await bookModel.find().populate('author_id')
// }

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    let specificpublisher = await bookModel.find().populate('publisher_id')
    
    res.send({data: specificBook,specificpublisher})

}

module.exports.createBook= createBook
//module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails =getBooksWithAuthorDetails