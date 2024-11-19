
const Club = require("../model/clubSchema");
const Event = require("../model/eventSchema");
const Attendance = require("../model/attendanceSchema");
exports.registerClub = async (req, res) => {
        const { clubName, email, phone, password } = req.body;
    
        if (!clubName || !email || !phone || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }
    
        try {
            
            const newClub = await Club.create({
                clubName,
                email,
                phone,
                password, 
            });
    
            res.status(201).json({ message: "Club registered successfully!", club: newClub });
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Error registering club.", error });
        }
    };
    


    exports.loginClub = async (req, res) => {
        const { email, password } = req.body;
    
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required." });
        }
    
        try {
            const club = await Club.findOne({ email: email.toLowerCase() });
    
            if (!club || club.password !== password) {
                return res.status(401).json({ error: "Invalid email or password" });
            }
    
            res.json({ 
                message: "Login successful!",
                club: {
                    clubName: club.clubName,
                    headName: club.headName || '',  // Adjust according to your schema
                    email: club.email,
                    instagram: club.instagram || '', // Adjust according to your schema
                    domain: club.domain || '',       // Adjust according to your schema
                    campus: club.campus || 'Ecity'   // Adjust according to your schema
                }
            });
        } catch (err) {
            console.error("Login Error:", err.message);
            res.status(500).json({ error: "Server error. Please try again." });
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