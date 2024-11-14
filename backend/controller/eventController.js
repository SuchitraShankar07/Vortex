
const Event = require("../model/eventSchema");
const mongoose = require("mongoose");

exports.getAllEvents = (req, res) => {
    Event.find((err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.getEventById = (req, res) => {
    Event.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.createEvent = (req, res) => {
    Event.create(req.body, (err, data) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json(data);
    });
};

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
