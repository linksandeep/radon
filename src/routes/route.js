
const express = require('express');
const router = express.Router();
 
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
      

     let array2=[]
     let pN=players.filter(x=>x.name)
     for(let i=0; i<pN.length;i++){
       array2.push(pN[i].name)
     }
     let ele=req.body.name
     let found = array2.find(element => element==ele);
      let check="undefined"
     if(found==undefined){
       array2.push(ele)
      console.log(array2)
     }
  // console.log("j")  


       //LOGIC WILL COME HERE
       res.send(  { data: players , status: true }  )
   })
  
module.exports = router;
