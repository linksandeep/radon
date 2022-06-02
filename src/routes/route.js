const express = require('express');
const externalModule = require('../logger/logger')
const  newRepo = require('../util/helper')
const  newRepo2 = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    //console.log('The constant in logger route has a value '+externalModule.endpoint)
    //console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    newRepo.printDate()
    newRepo.printmonth()
    newRepo.getBatchInfo()
    newRepo2.trim()
    newRepo2.changetoLowerCase()
    newRepo2.changeToUpperCase()
    res.send('My first ever api!')
    
});

//router.get('/test-me1',externalModule.log);

//router.get('/test-me2', function (req, res) {
    //res.send('My third api!')
//});



module.exports = router;
// adding this comment for no reason