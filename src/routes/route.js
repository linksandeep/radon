const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/teest-m", function (req, res) {
    res.send("My first ever api!")
})

router.post("/books-i.e", UserController.createBook  )

router.get("/books-i.e2", UserController.getAllBook)

module.exports = router;