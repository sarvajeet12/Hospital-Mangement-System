const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers")

// Validation path
const userSchemaValidation = require("../validation/userSchemaValidation");
const userLoginSchemaVal = require("../validation/userLoginSchemaVal");

// middleware
const validate = require("../middlewares/validatorMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");


// register page  
router
    .route("/register").
    post(validate(userSchemaValidation), userControllers.register);

// login page  
router
    .route("/login").
    post(validate(userLoginSchemaVal), userControllers.login);

// user login [which user is log (admin or not)]
router
    .route("/user")
    .get(authMiddleware, userControllers.user);


module.exports = router;
