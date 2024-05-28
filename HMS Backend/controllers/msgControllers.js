const Messages = require("../models/msgSchema");

// *----------------------------------------- Register Page Logic
const sendMsg = async (req, resp) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return resp.status(400).json({ message: "Fill The Form" });
        }

        const result = await Messages.create({
            name, email, phone, message
        })

        resp.status(201).json({
            message: result
        })

    } catch (error) {
        resp.status(400).json({ message: error });
    }
}

// *----------------------------------------- End  : Register 


module.exports = { sendMsg }; 