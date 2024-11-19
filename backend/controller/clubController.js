
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
                    headName: club.headName || '',  
                    email: club.email,
                    // instagram: club.instagram || '',
                    domain: club.domain || '',      
                    campus: club.campus || 'Ecity'  
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

    if (!eventId || !userId) {
      return res.status(400).json({ error: "Event ID and User ID are required." });
    }

    const attendance = await Attendance.findOneAndUpdate(
      { event: eventId, user: userId },
      { attended: true },
      { upsert: true, new: true }
    );

    if (!attendance) {
      return res.status(500).json({ error: "Failed to mark attendance in the database." });
    }

    res.status(200).json({ message: "Attendance marked successfully.", attendance });
  } catch (err) {
    console.error("Error marking attendance:", err);
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.getAttendanceForEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    const attendanceRecords = await Attendance.find({ event: eventId });

    res.status(200).json(attendanceRecords);
  } catch (err) {
    console.error("Error fetching attendance records:", err);
    res.status(500).json({ error: "Internal server error." });
  }
};

exports.getAllAttendanceRecords = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find();

    res.status(200).json(attendanceRecords);
  } catch (err) {
    console.error("Error fetching all attendance records:", err);
    res.status(500).json({ error: "Internal server error." });
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