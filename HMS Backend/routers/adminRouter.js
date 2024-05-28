const express = require("express");
const router = express.Router();

// middlewares
const authMiddleware = require("../middlewares/authMiddleware");

const upload = require("../middlewares/upload");

const adminMiddleware = require("../middlewares/adminMiddleware");


// controllers
const adminControllers = require("../controllers/adminControllers");


//get appointment data
router
    .route("/get/appointment")
    .get(authMiddleware, adminMiddleware, adminControllers.getAppointData);


// get user by id (get data of particular user)
router
    .route("/users/:id")
    .get(authMiddleware, adminMiddleware, adminControllers.getUserById);

// update user by id (update data of particular user)
router
    .route("/update/:id")
    .put(authMiddleware, adminMiddleware, adminControllers.updateUserById);


// get all messages
router
    .route("/getallmsg")
    .get(authMiddleware, adminMiddleware, adminControllers.getAllMsg);

// register new doctors
router
    .route("/register/doctor")
    .post(upload.single("image"), authMiddleware, adminMiddleware, adminControllers.doctorRegister);


//get all doctors data
router
    .route("/get/doctors")
    .get(adminControllers.getAllDoctors);


// search doctor

router
    .route("/search/:key")
    .get(adminControllers.searchDoctor);




module.exports = router;