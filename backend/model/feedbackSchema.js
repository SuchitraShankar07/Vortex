const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
    name: {type:String},
    email: { type: String, required: true, validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
    message : {type:String}
    
}, {
    timestamps: true,
    collection: "feedback"
})

module.exports = mongoose.model("feedbackSchema", feedbackSchema);