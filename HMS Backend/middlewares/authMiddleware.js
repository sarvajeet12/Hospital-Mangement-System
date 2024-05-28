// get all data of loggedIn user from database.

const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const authMiddleware = async (req, resp, next) => {
    const token = req.header("Authorization");

    if (token == "Bearer null") {
        //If you attempt to use an expired token, you'll receive a "401 Unauthorized HTTP" response.
        resp.status(401).json({ message: "Please Login First" });
        return;
    }

    // Assuming token is in the format "Bearer <jwtToken>, Removing the "Bearer" and extra space".
    const jwtToken = token.replace("Bearer", "").trim();
    //console.log("token form middleware", jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });  // hide password
        console.log(userData);
        // custom property
        req.user = userData;
        req.token = token;
        req.userId = userData._id;

        next();
    } catch (error) {
        console.error(error.message);
    }
};


module.exports = authMiddleware;