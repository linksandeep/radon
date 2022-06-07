const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })


router.post("/createBook",BookController.createBook)
router.get("/bookList", BookController.bookList)
router.post("/getBooksInYea", BookController.getBooksInYea)
router.get("/getXINRBooks",BookController.getXINRBooks)
router.get("/getRandomBooks",BookController.getRandomBooks)
router.post("/getParticularBookslist",BookController.getParticularBookslist)
module.exports = router;