const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
    clubName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },  // hashed password
    createdEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }]
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
