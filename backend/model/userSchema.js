const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    SRN: { type: String, required: true, unique: true, minlength: 13,maxlength:13 },
    fullName: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
    phone: { type: String, required:true, validate: /^\d{10}$/, message: 'Phone number must be 10 digits' },
    password: { type: String, required: true },  
    bookedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "eventSchema" }],
    attendedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "attendanceSchema" }]  
    
}, {
    timestamps: true,
    collection : "users"
});

module.exports = mongoose.model("userSchema", userSchema);
