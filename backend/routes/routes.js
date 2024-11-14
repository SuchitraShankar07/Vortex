const express = require("express");
const userController = require("../controller/userController");
const clubController = require("../controller/clubController");
const eventController = require("../controller/eventController");
const feedbackController = require("../controller/feedbackController");
const authenticate = require("../middleware/auth");

const router = express.Router();

// user routes
router.get("/user-list", userController.getAllUsers);
router.post("/create-user", userController.createUser);
router.get("/check-user/:uname", userController.getUserByUsername);
router.get("/update-user/:id", userController.updateUserById);
router.put("/update-user/:id", userController.updateUserById);
router.delete("/delete-user/:id", userController.deleteUserById);

// event routes
router.get("/event-list", eventController.getAllEvents);
router.get("/check-event/:id", eventController.getEventById);
router.post("/create-event", eventController.createEvent);
router.get("/update-event/:id", eventController.updateEventById);
router.put("/update-event/:id", eventController.updateEventById);
router.delete("/delete-event/:id", eventController.deleteEventById);

// feedback route
router.post("/post-feedback", feedbackController.postFeedback);

// club routes
router.post("/register", clubController.registerClub);
router.post("/login", clubController.loginClub);
router.post("/create-event", authenticate("club"), clubController.createEvent);
router.post("/mark-attendance", authenticate("club"), clubController.markAttendance);
router.get("/display-club", authenticate("club"),clubController.displayClub);

//create, update, delete, displaying club details, 
module.exports = router;
