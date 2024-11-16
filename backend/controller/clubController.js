const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Club = require("../model/clubSchema");
const Event = require("../model/eventSchema");
const Attendance = require("../model/attendanceSchema");
exports.registerClub = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const existingClub = await Club.findOne({ email });
        if (existingClub) {
            return res.status(400).json({ error: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const club = await Club.create({ ...req.body, password: hashedPassword });

        res.status(201).json(club);
    } catch (err) {
        console.error(err);  
        res.status(400).json({ error: err.message });
    }
};


exports.loginClub = async (req, res) => {
    try {
        const club = await Club.findOne({ email: req.body.email });
        if (!club || !(await bcrypt.compare(req.body.password, club.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = jwt.sign({ id: club._id, role: "club" }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createEvent = async (req, res) => {
    try {
        const event = await Event.create({ ...req.body, organizer: req.club.id });
        await Club.findByIdAndUpdate(req.club.id, { $push: { createdEvents: event._id } });
        res.json(event);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.markAttendance = async (req, res) => {
    try {
        const { eventId, userId } = req.body;
        const attendance = await Attendance.findOneAndUpdate(
            { event: eventId, user: userId },
            { attended: true },
            { upsert: true, new: true }
        );
        res.json(attendance);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.displayClub = async (req, res) => {
    try {
        const club = await Club.findById(req.params.id);
        if (!club) return res.status(404).json({ error: "Club not found" });
        res.json(club);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};