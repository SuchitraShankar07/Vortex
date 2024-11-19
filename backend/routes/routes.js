const express = require("express");
const userController = require("../controller/userController");
const clubController = require("../controller/clubController");
const eventController = require("../controller/eventController");
const feedbackController = require("../controller/feedbackController");


const router = express.Router();

// User Routes
router.post("/user/register", userController.registerUser);
router.post("/user/login", userController.loginUser);

router
  .route("/user/:id")
  .get( userController.getUserById)
  .put( userController.updateUserById)
  .delete( userController.deleteUserById);

router.get("/user/attended-events",userController.attendedEvents);
router.post("/user/book-event/:eventId", userController.bookEvent);
router.get("/user/generate-qr/:eventId", userController.generateQR);

// Event Routes
router
  .route("/events")
  .get(eventController.getAllEvents)
  .post(eventController.createEvent);

router
  .route("/events/:id")
  .get(eventController.getEventById)
  .put(eventController.updateEventById)
  .delete(eventController.deleteEventById);

// Feedback Routes
router
  .route("/feedback")
  .post(feedbackController.postFeedback);

// Club Routes
router.post("/club/register", clubController.registerClub);
router.post("/club/login", clubController.loginClub);
router.post("/club/:id/create-event",clubController.createEvent);
router.get("/club/:id", clubController.displayClub);

// Attendance Routes
router.post("/attendance/mark",clubController.markAttendance); // Route to mark attendance
router.get("/attendance/:id",clubController.getAttendanceForEvent); // Get attendance for an event
router.get("/attendance",clubController.getAllAttendanceRecords); // Optional: Get all attendance records

module.exports = router;
