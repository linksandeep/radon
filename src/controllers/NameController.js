const NameModel = require("../models/NameModel")



const createName= async function (req, res) {
    let Name= req.body
    let NameData= await NameModel.create(Name)
    res.send({msg: NameData})
}


module.exports.createName=createName
