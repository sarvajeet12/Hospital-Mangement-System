const mongoose = require("mongoose");


const msgSchema = new mongoose.Schema({
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
    message: {
        type: String,
        required: true
    }
});



// define the model or the collection name
const Messages = new mongoose.model("Message", msgSchema);

module.exports = Messages;