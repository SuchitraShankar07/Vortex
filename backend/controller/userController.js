// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
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
        
//         const user = await User.create({ ...req.body, password: hashedPassword });
//         const userWithoutPassword = user.toObject();
//         delete userWithoutPassword.password;

//         res.status(201).json(userWithoutPassword); 
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };
exports.registerUser = async (req, res) => {
    const { SRN, phone, fullName, email, password } = req.body;

    if (!SRN || !phone || !fullName || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
    
        const newUser = await User.create({
            SRN: SRN.toLowerCase(),
            phone,
            fullName,
            email,
            password,
        });

        res.status(201).json({ message: "User registered successfully!", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error registering user.", error });
    }
};


// exports.loginUser = async (req, res) => {
//     try {
//         const user = await User.findOne({ email: req.body.email });
//         if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
//             return res.status(401).json({ error: "Invalid credentials" });
//         }
//         const token = jwt.sign({ id: user._id, role: "user" }, process.env.JWT_SECRET, { expiresIn: "1h" });
//         res.json({ token });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
exports.loginUser = async (req, res) => {
    const { SRN, password } = req.body;

    console.log("Received Login Request:", SRN, password);

    if (!SRN || !password) {
        console.log("Missing credentials");
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        const user = await User.findOne({ SRN: SRN.toLowerCase() });
        console.log("Found User:", user);

        if (!user) {
            return res.status(401).json({ error: "Invalid SRN or password" });
        }

        const isPasswordValid = await password.localeCompare( user.password);
        console.log("Password Validity:", isPasswordValid);

        if (isPasswordValid) {
            return res.status(401).json({ error: "Invalid SRN or password" });
        }

       

        res.json({message: "Login successful!" });
    } catch (err) {
        console.error("Login Error:", err.message);
        res.status(500).json({ error: "Server error. Please try again." });
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

