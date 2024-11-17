const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
    clubName: { type: String, required: true },
    email: { type: String, required: true, validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
    password: { type: String, required: true }, 
    phone: { type: String, required:true, validate: /^\d{10}$/, message: 'Phone number must be 10 digits' },
    createdEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "eventSchema" }]
}, {
    timestamps: true,
    collection: "clubs"
});

module.exports = mongoose.model("clubSchema", clubSchema);
/*club head name 
club name
club details
club head email
club phone no.*/
