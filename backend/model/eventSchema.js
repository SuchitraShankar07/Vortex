const mongoose = require("mongoose");
const subSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    "SRN": {type:String, required: true, minlength:13},
    "fullName": {type:String, required: true},
    "email" : {type:String},
    "phone" : {type:String}
})
const eventSchema = new mongoose.Schema({
    "eventName": {type:String, required: true, unique:true},
    "description": {type:String, required: true, minlength: 3},
    "location" : {type:String},
    "date" : {type:Date, required: true},
    "organizer": {type:String, required: true, ref },
    "registeredUsers": [subSchema],
    "createdAt": {type:Date},
    "updatedAt": {type:Date}
    

}, {
    collection: "events"
})

module.exports = mongoose.model("eventSchema", eventSchema);
