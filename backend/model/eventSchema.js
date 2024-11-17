const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true, unique: true },
    description: { type: String, required: true, minlength: 3 },
    campus: { type: String, required: true },
    venue: { type: String, required: true },
    date: { type: Date, required: true },
    organizer: { type: String, required: true }, // Club name or ID
    registeredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Reference to User model
  },
  {
    collection: "events",
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
