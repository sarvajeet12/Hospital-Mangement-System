const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
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
        require: true,
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
    appointDate: {
        // appointment date
        type: String,
        required: true

    },
    department: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending",
    },

});





// define the model or the collection name
const Appointment = new mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;