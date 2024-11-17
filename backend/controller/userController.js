const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const Event = require("../model/eventSchema");
const Attendance = require("../model/attendanceSchema");
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
// exports.registerUser = async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
//         // leaving out password from the response coz cybersekuriti or smn idk man
//         const user = await User.create({ ...req.body, password: hashedPassword });
//         const userWithoutPassword = user.toObject();
//         delete userWithoutPassword.password;

//         res.status(201).json(userWithoutPassword); 
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };

exports.registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Validation
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error.' });
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
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateUserById = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ error: "User not found" });
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteUserById = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: "User not found" });
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

