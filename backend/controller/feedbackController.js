
const Feedback = require("../model/feedbackSchema");

exports.postFeedback = (req, res) => {
    Feedback.create(req.body, (err, data) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json(data);
    });
};
