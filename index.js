const express = require("express");
const { dbConnection } = require("./db");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const { userRouter } = require("./routes/User.route");
const { quizRouter } = require("./routes/Quiz.router");

app.use(cors());
app.use(express.json());
app.use("/", userRouter);
app.use("/", quizRouter);

app.listen(port, async () => {
    try {
        await dbConnection;
        console.log("Connected to the Database");
    }
    catch(err) {
        console.log(err);
        console.log("Cannot connect to the Database");
    }
    console.log(`Server is running on the port: ${port}`);
})