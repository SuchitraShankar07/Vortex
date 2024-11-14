// routes/routes.js
const express = require("express");
const userController = require("../controller/userController");
const eventController = require("../controller/eventController");
const feedbackController = require("../controller/feedbackController");

const router = express.Router();

// User Routes
router.get("/user-list", userController.getAllUsers);
router.post("/create-user", userController.createUser);
router.get("/check-user/:uname", userController.getUserByUsername);
router.get("/update-user/:id", userController.updateUserById);
router.put("/update-user/:id", userController.updateUserById);
router.delete("/delete-user/:id", userController.deleteUserById);

// Event Routes
router.get("/event-list", eventController.getAllEvents);
router.get("/check-event/:id", eventController.getEventById);
router.post("/create-event", eventController.createEvent);
router.get("/update-event/:id", eventController.updateEventById);
router.put("/update-event/:id", eventController.updateEventById);
router.delete("/delete-event/:id", eventController.deleteEventById);

// Feedback Route
router.post("/post-feedback", feedbackController.postFeedback);

module.exports = router;
