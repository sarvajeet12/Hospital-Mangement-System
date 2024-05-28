const Appointment = require("../models/appointSchema");
const bcrypt = require("bcrypt");




// -----------------------------------------User Appointment Page Logic

const appoint = async (req, resp) => {
    try {


        // destructuring
        const { name, email, phone, dob, gender, appointDate, department, doctor, address } = req.body;


        // any of these things missing
        if (!name || !email || !phone || !dob || !gender || !appointDate || !department || !doctor || !address) {
            return resp.status(400).json({ message: "Fill The Full Form" });
        }

        //else
        const sendAppoint = await Appointment.create({ name, email, phone, dob, gender, appointDate, department, doctor, address });

        resp.status(200).json({
            message: "Appointment Send Successfully",
            data: sendAppoint
        })

    } catch (error) {
        resp.status(400).json({ msg: error });
    }
}
// ----------------------------------------- End : Appointment Logic



module.exports = { appoint };