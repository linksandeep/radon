const AuthorModel=require("../models/authorModel")
const PublisherModel=require("../models/publisherModel")




const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const createpublisher= async function (req, res) {
    let letu=req.body
    let letu2 = await PublisherModel.create(letu)
    res.send({data: letu2})
}



module.exports.createAuthor= createAuthor
module.exports.createpublisher= createpublisher