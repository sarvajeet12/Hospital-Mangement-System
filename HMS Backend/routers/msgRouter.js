const express = require("express");
const router = express.Router();

// ValidateMiddleware Path
const validate = require("../middlewares/validatorMiddleware");

//msg controllers
const msgControllers = require("../controllers/msgControllers");

// msgSchemaValidation path
const msgSchemaValidation = require("../validation/msgSchemaValidation");



// message route
router
    .route("/send").
    post(validate(msgSchemaValidation), msgControllers.sendMsg);



module.exports = router;