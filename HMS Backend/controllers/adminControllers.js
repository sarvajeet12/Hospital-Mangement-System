const Appointment = require("../models/appointSchema");
const Messages = require("../models/msgSchema");
const Doctors = require("../models/doctorSchema");


// get All appointment Data --------------------------------------------------------------------------------
const getAppointData = async (req, resp) => {
    try {
        const appointData = await Appointment.find({})

        if (!appointData || appointData.length === 0) {
            return resp.status(404).send({ message: "No Users Found" });
        }

        resp.status(200).json(appointData);
    } catch (error) {
        resp.status(500).json({ message: error });
        console.log(error);
    }
}


//*--------------------------------------------------  get single user data for update

const getUserById = async (req, resp) => {
    try {
        const id = req.params.id;
        const usersById = await Appointment.findOne({ _id: id });
        resp.status(200).send(usersById);
        return;
    } catch (error) {
        next(error);
    }
}


// ----------------------------------------  update status ---------------------------------------------------------
const updateUserById = async (req, resp) => {
    try {
        const id = req.params.id;
        const updatesUserData = req.body;
        let updatedData = await Appointment.updateOne({ _id: id }, { $set: updatesUserData });
        resp.status(200).send(updatedData);
        return;
    } catch (error) {
        next(error);
    }
}

// ------------------------------------------------- get all message messages ---------------------------------------------------
const getAllMsg = async (req, resp) => {
    try {
        const msg = await Messages.find({})

        if (!msg || msg.length === 0) {
            return resp.status(404).send({ message: "No Message Found" });
        }

        resp.status(200).json(msg);
    } catch (error) {
        resp.status(500).json({ message: error });
        console.log(error);
    }
}


// ------------------------------------------------------- register new doctors ------------------------------------------------

const doctorRegister = async (req, resp) => {
    try {

        let docInfo = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            dob: req.body.dob,
            gender: req.body.gender,
            department: req.body.department,
            image: req.file.filename,

        }

        // if email already exits
        const doctorExist = await Doctors.findOne({ email: docInfo.email });

        // if (userExist return true and false)
        if (doctorExist) {
            return resp.status(400).json({ message: "Doctor Already Register" });
        }

        const info = await Doctors.create(docInfo);
        resp.status(200).json(info);
        console.log(info);



    } catch (error) {
        resp.status(400).json({ message: error });
    }
}

// -------------------------------------------------------- get all register doctors -----------------------------------
const getAllDoctors = async (req, resp) => {
    try {
        const doc = await Doctors.find({})

        if (!doc || doc.length === 0) {
            return resp.status(404).send({ message: "No Doctors Found" });
        }

        resp.status(200).json(doc);
    } catch (error) {
        resp.status(500).json({ message: error });
        console.log(error);
    }
}


// ------------------------------------------------------ search doctor ------------------------------------------------

const searchDoctor = async (req, resp) => {
    try {
        let result = await Doctors.find({
            "$or": [
                { name: { $regex: req.params.key, $options: 'i' } },
                { department: { $regex: req.params.key, $options: 'i' } },
            ]
        });

        resp.status(200).json(result);
    } catch (error) {

    }
}



module.exports = { getAppointData, updateUserById, getAllMsg, doctorRegister, getUserById, getAllDoctors, searchDoctor };