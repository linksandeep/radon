const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getAllBook= async function (req, res) {
    let getAllBook= await UserModel.find()
    res.send({msg: getAllBook})
}

module.exports.createBook= createBook
module.exports.getAllBook= getAllBook