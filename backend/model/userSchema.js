const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    SRN: { type: String, required: true, unique: true, minlength: 13,maxlength:13 },
    fullName: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },  
    bookedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "events" }],
    attendedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "attendance" }]  
    
}, {
    timestamps: true,
    collection : "users"
});

module.exports = mongoose.model("userSchema", userSchema);
