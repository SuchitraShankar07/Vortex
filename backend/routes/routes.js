const express = require("express");
const userController = require("../controller/userController");
const clubController = require("../controller/clubController");
const eventController = require("../controller/eventController");
const feedbackController = require("../controller/feedbackController");// Import attendance controller
const authenticate = require("../middleware/auth");

const router = express.Router();

// User Routes
router.post("/user/register", userController.registerUser);
router.post("/user/login", userController.loginUser);

router
  .route("/user/:id")
  .get(authenticate, userController.getUserById)
  .put(authenticate, userController.updateUserById)
  .delete(authenticate, userController.deleteUserById);

router.get("/user/attended-events", authenticate, userController.attendedEvents);
router.post("/user/book-event/:eventId", authenticate, userController.bookEvent);
router.get("/user/generate-qr/:eventId", authenticate, userController.generateQR);

// Event Routes
router
  .route("/events")
  .get(eventController.getAllEvents)
  .post(eventController.createEvent);

router
  .route("/events/:id")
  .get(eventController.getEventById)
  .put(authenticate, eventController.updateEventById)
  .delete(authenticate, eventController.deleteEventById);

// Feedback Routes
router
  .route("/feedback")
  .post(feedbackController.postFeedback);

// Club Routes
router.post("/club/register", clubController.registerClub);
router.post("/club/login", clubController.loginClub);
router.post("/club/:id/create-event", authenticate, clubController.createEvent);
router.get("/club/:id", clubController.displayClub);

// Attendance Routes
router.post("/attendance/mark", authenticate, clubController.markAttendance); // Route to mark attendance
router.get("/attendance/:eventId", authenticate, clubController.getAttendanceForEvent); // Get attendance for an event
router.get("/attendance", authenticate, clubController.getAllAttendanceRecords); // Optional: Get all attendance records

module.exports = router;
