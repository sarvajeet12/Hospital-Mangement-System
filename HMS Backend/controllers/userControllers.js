const User = require("../models/userSchema");
const bcrypt = require("bcrypt");




// -----------------------------------------User Register Page Logic

const register = async (req, resp) => {
    try {
        //console.log(req.body);

        // destructuring
        const { name, email, password, phone, dob, gender } = req.body;

        // any of these things missing
        if (!name || !email || !password || !phone || !dob || !gender) {
            return resp.status(400).json({ message: "Fill The Full Form" });
        }


        // if email already exits
        const userExist = await User.findOne({ email });

        // if (userExist return true and false)
        if (userExist) {
            return resp.status(400).json({ message: "User Already Register" });
        }

        //else
        const userCreated = await User.create({ name, email, password, phone, gender, dob });

        resp.status(200).json({
            message: "Register Successfully",
            data: userCreated,
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        })

    } catch (error) {
        resp.status(400).json({ msg: error });
    }
}
// ----------------------------------------- End : Register Logic


// ----------------------------------------- Login Logic

const login = async (req, resp) => {
    try {

        const { email, password } = req.body;

        // match login email and register email
        const userExist = await User.findOne({ email: email });
        // console.log(userExist) : if true, show all information of that data

        if (!userExist) {
            return resp.status(400).json({ message: "Invalid Credentials" });

        }

        // else 
        //* login password is passed
        const user = await userExist.comparePassword(password);

        if (user) {
            // these all data send to frontend (const resp_data = response.json)
            resp.status(200).json({
                msg: "login successfully",
                data: user,
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            });
        } else {
            resp.status(401).send({ message: "Invalid email or password" }) // this part shown in frontend alert 
        }

    } catch (error) {
        resp.status(500).json({ message: error });
        console.log(error);
    }
}
// *----------------------------------------- End : Login Logic


// *--------------------------- to send user data - User Logic (check which user log in)

const user = async (req, resp) => {
    try {
        const userData = req.user;
        resp.status(200).json({ userData });
    } catch (error) {
        console.log(error);
    }
}

// *----------------------------------------- End : User Logic







module.exports = { register, login, user };