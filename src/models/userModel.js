const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    balance: {
        type: Number,
        
    },
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"] //"falana" will give an error
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model('Newuser', userSchema) //users



// String, Number
// Boolean, Object/json, array