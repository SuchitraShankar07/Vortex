const Feedback = require("../model/feedbackSchema");

exports.postFeedback = async (req, res) => {
    try {
     
        const data = await Feedback.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        // Handle any error that occurs
        res.status(400).json({ error: err.message });
    }
};
