const mongoose = require('mongoose');

const authorDetailsSchema = new mongoose.Schema( {

        author_id:{
            type:Number,
            unique:true,
            required:true
        },
        author_name:String,
        age:Number,
        address:String
    }, 
    { timestamps: true });

    module.exports = mongoose.model('Author', authorDetailsSchema)