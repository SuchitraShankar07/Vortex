const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    eventID:{type:"string"},
    eventName: {type:String, required: true, unique:true},
    description: {type:String, required: true, minlength: 3},
    location : {type:String},
    date : {type:Date, required: true},
    organizer: {type:String, required: true, ref:'clubSchema' },
    registeredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "userSchema" }],

}, {
    collection: "events",
    timestamps: true,
})


module.exports = mongoose.model("eventSchema", eventSchema);
/*const mongoose = require("mongoose");
const subSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    "SRN": {type:String, required: true, minlength:13},
    "fullName": {type:String, required: true},
    "email" : {type:String},
    "phone" : {type:String}
})
const eventSchema = new mongoose.Schema({
    eventName: { type: String, required: true, unique: true },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: "Club" },
    description: { type: String },
    time: { type: String, required: true},
    date: { type: Date, required: true },
    campus: { type: String, required: true},
    venue: { type: String, required: true},

    registeredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}, {
    timestamps: true,
    collection: "events"
});

module.exports = mongoose.model("Event", eventSchema);
/*event name 
club name 
description 
time 
date 
campus 
venue 
image*/
 