require("dotenv").config();  // write when dotenv  is installed
const express = require("express");
const app = express();



const cors = require("cors");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/errorMiddleware");

// ? Router Path
const msgRouter = require("./routers/msgRouter");
const userRouter = require("./routers/userRouter");
const appointRouter = require("./routers/appointRouter");
const adminRouter = require("./routers/adminRouter");

// middleware

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


// TODO: tackle cors

const corsOption = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
};

app.use(cors(corsOption));


// TODO: End: tackle cors

// Router link
app.use("/api/v1", msgRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", appointRouter);
app.use("/api/v1", adminRouter);

app.use(errorMiddleware);



// If database connected successfully THEN run "app.listen"
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    });
});