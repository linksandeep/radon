const mongoose = require('mongoose');
   
const BookDetailsSchema= new mongoose.Schema({ 
         name:String,
         author_id:{
         type:Number,
         unique:true,
        required:true
    },
        price:Number,
        ratings:Number},
        { timestamps: true });

        module.exports = mongoose.model('Book', BookDetailsSchema)

