const express = require("express");
const userController = require("../controller/userController");
const clubController = require("../controller/clubController");
const eventController = require("../controller/eventController");
const feedbackController = require("../controller/feedbackController");
const authenticate = require("../middleware/auth");
const router = express.Router();
// authentication
router.post("/user/register", userController.registerUser);
router.post("/user/login", userController.loginUser);


router
    .route("/user/:id")
    .get(authenticate, userController.getUserById)
    .put(authenticate, userController.updateUserById)
    .delete(authenticate, userController.deleteUserById);

// Event Interaction
router.get("/user/attended-events", authenticate, userController.attendedEvents);
router.post("/user/book-event/:eventId", authenticate, userController.bookEvent);
router.get("/user/generate-qr/:eventId", authenticate, userController.generateQR);

// event routes
router.route("/events")
    .get(eventController.getAllEvents)
    .post(authenticate, eventController.createEvent);

router.route("/events/:id")
    .get(eventController.getEventById)
    .put(authenticate, eventController.updateEventById)
    .delete(authenticate, eventController.deleteEventById);

//feedbac routes
router.route("/feedback")
    .post(feedbackController.postFeedback)
    // .get(authenticate, feedbackController.getAllFeedback);

// club routes
router.post("/club/register", clubController.registerClub);
router.post("/club/login", clubController.loginClub);
router.post("/club/:id/create-event", authenticate, clubController.createEvent);
router.post("/club/:id/mark-attendance", authenticate, clubController.markAttendance);
router.get("/club/:id", clubController.displayClub);

module.exports = router;
