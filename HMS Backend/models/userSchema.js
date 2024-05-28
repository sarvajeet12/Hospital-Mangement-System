const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        //select: false,  // it means when  we get data from database it will not show the password
    },
    phone: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});


//? 2nd way:  secure the password with the bcrypt

userSchema.pre("save", async function (next) {
    //console.log(this);  //show  all data of this user before save it to db
    const user = this;

    if (!user.isModified("password")) { // if password is not modified
        return next();
    }

    //else
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;
    } catch (error) {
        next(error)
    }
})

//? Compare the password
//[compare : login password and register password]
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


// JWT Logic
//* return means : after run this methods return to userControllers.js and assign to token.
//? Instance method
//* payload means : write what your the user identities
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: process.env.JWT_EXPIRES  // 7days
            }
        );

    } catch (error) {
        console.log(error);
        resp.status(400).json({ message: error })
    }
}


// define the model or the collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;