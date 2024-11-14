const User = require("../model/userSchema");
const mongoose = require("mongoose");

exports.getAllUsers = (req, res) => {
    User.find((err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.createUser = (req, res) => {
    User.create(req.body, (err, data) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json(data);
    });
};

exports.getUserByUsername = (req, res) => {
    User.findOne({ username: req.params.uname }, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
};

exports.updateUserById = (req, res) => {
    User.findByIdAndUpdate(
        mongoose.Types.ObjectId(req.params.id),
        { $set: req.body },
        { new: true },
        (err, data) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(data);
        }
    );
};

exports.deleteUserById = (req, res) => {
    User.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User deleted successfully", data });
    });
};
