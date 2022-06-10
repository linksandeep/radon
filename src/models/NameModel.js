const mongoose = require('mongoose');

const NameSchema = new mongoose.Schema( {
    fookName: String, 
    lastName: String,

}, { timestamps: true });


module.exports = mongoose.model('Name', NameSchema) 
