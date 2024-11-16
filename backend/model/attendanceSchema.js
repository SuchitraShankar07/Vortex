const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    event: { type: mongoose.Schema.Types.ObjectId, ref: "eventSchema", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "userSchema", required: true },
    attended: { type: Boolean, default: false }
}, {
    timestamps: true,
    collection: "attendance"
});

module.exports = mongoose.model("attendanceSchema", attendanceSchema);
    