const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  event: {
    type: String,
    ref: "Event",
    required: true,
  },
  user: {
    type: String, 
    required: true,
  },
  attended: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
