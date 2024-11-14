const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Event = require("../models/Event");
const Attendance = require("../models/Attendance");
const QRCode = require("qrcode");
exports.attendedEvents = async( req, res) =>{
    try{
        const user = await User.findById(req.user.id);
        const attendedEvents = await Attendance.find({ user: user, attended: true });
        res.json(attendedEvents.map((attendance) => attendance.event));
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
}
exports.registerUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        // leaving out password from the response coz cybersekuriti or smn idk man
        const user = await User.create({ ...req.body, password: hashedPassword });
        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        res.status(201).json(userWithoutPassword); 
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id, role: "user" }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.bookEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) return res.status(404).json({ error: "Event not found" });

        await User.findByIdAndUpdate(req.user.id, { $push: { bookedEvents: event._id } });
        event.registeredUsers.push(req.user.id);
        await event.save();

        res.json({ message: "Event booked successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.generateQR = async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) return res.status(404).json({ error: "Event not found" });

        const qrData = { eventId: event._id, userId: req.user.id };
        const qrCode = await QRCode.toDataURL(JSON.stringify(qrData));

        res.json({ qrCode });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
