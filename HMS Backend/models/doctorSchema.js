const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    department: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});


// define the model or the collection name
const Doctors = new mongoose.model("Doctor", doctorSchema);

module.exports = Doctors;