const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    "SRN": {type:String, required: true, unique:true, minlength: 13, maxlength:13},
    "fullName": {type:String, required: true, minlength: 3},
    "email" : {type:String},
    "phone" : {type:String},
    "password": {type:String},
    "bookedEvents": {type:Array},
    "createdAt": {type:Date},
    "updatedAt": {type:Date},


}, {
    collection: "userrecord"
})

module.exports = mongoose.model("userSchema", userSchema);
    