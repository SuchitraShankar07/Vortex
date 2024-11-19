const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  user: {
    type: String, // Assuming Reference Number is used as the identifier
    required: true,
  },
  attended: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
