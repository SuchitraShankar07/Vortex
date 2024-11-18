
const Event = require("../model/eventSchema");
const mongoose = require("mongoose");

exports.getAllEvents = async(req, res) => {
    try{
        const events = await Event.find();
        res.status(200).json(events);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

exports.getEventById = (req, res) => {
    Event.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
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
      } catch (err) {
        console.error("Error creating event:", err);
        res.status(500).json({ error: "Server error" });
      }
    }


exports.updateEventById = (req, res) => {
    Event.findByIdAndUpdate(
        mongoose.Types.ObjectId(req.params.id),
        { $set: req.body },
        { new: true },
        (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        }
    );
};

exports.deleteEventById = (req, res) => {
    Event.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Event deleted successfully", data });
    });
};
