const Event = require("../model/eventSchema");
const mongoose = require("mongoose");

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    console.log("here lies the issue")
    const event = await Event.findById(mongoose.Types.ObjectId(req.params.id));
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const { eventName, description, campus, venue, date, organizer } = req.body;

    // Validate required fields
    if (!eventName || !description || !campus || !venue || !date || !organizer) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create and save the new event
    const newEvent = new Event({
      eventName,
      description,
      campus,
      venue,
      date,
      organizer,
    });

    await newEvent.save();

    res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateEventById = async (req, res) => {
  try {
    console.log("test1")
    const updatedEvent = await Event.findByIdAndUpdate(
      mongoose.Types.ObjectId(req.params.id),
      { $set: req.body },
      { new: true }
    );

    if (!updatedEvent) {
        console.log("test2")
      return res.status(404).json({ error: "Event not found" });
    }
    console.log("test3")

    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("test4")
  }
};

exports.deleteEventById = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id));

    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({ message: "Event deleted successfully", data: deletedEvent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
