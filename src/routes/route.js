const express = require('express');
const router = express.Router();
const BookM=require("../models/bookModel")
const AuthorModel=require("../models/AuthorModel")
const writerController= require("../controllers/writerController")




router.post("/createBookAuthor",writerController.createBookAuthor)
router.post("/BookDetails",writerController.BookDetails)
router.get("/Chetan_Bhagat",writerController.Chetan_Bhagat)
router.get("/findBook",writerController.findBook)
router.get("/querying",writerController.querying)
 module.exports = router;








// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

 // router.get("/bookList", BookController.bookList)
// router.post("/getBooksInYea", BookController.getBooksInYea)
// router.get("/getXINRBooks",BookController.getXINRBooks)
// router.get("/getRandomBooks",BookController.getRandomBooks)
// router.post("/getParticularBookslist",BookController.getParticularBookslist)