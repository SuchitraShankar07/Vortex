const Event = require("../model/eventSchema");


exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({ data: { events } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({ error: error.message });
    
  }
};

exports.createEvent = async (req, res) => {
  try {
    const { eventName, description, campus, venue, date, organizer } = req.body;


    if (!eventName || !description || !campus || !venue || !date || !organizer) {
      return res.status(400).json({ error: "All fields are required" });
    }


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
    console.log("Request Params ID:", req.params.id);
    console.log("Request Body:", req.body);
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json({ message: "Event updated successfully", event: updatedEvent });
  } catch (error) {
    console.error("Update Event Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};


// exports.deleteEventById = async (req, res) => {
//   try {
//     const deletedEvent = await Event.findByIdAndDelete(req.params.id);

//     if (!deletedEvent) {
//       return res.status(404).json({ error: "Event not found" });
//     }

//     res.json({ message: "Event deleted successfully", data: deletedEvent });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
exports.deleteEventById= async (req, res) => {
  console.log(`Deleting event with ID: ${req.params.id}`);
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    console.log('Deleted event:', deletedEvent);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    console.error('Error deleting event:', err);
    res.status(500).json({ message: 'Error deleting event' });
  }
}
