const express = require("express");
const { QuizModel } = require("../models/Quiz.model");
const quizRouter = express.Router();


quizRouter.post("/create-quiz", async (req, res) => {
    // console.log(req.body);

    try {
        const quiz = await QuizModel(req.body);
        await quiz.save();
        // console.log(quiz);

        res.status(200).send({"msg": "Quiz successfully created"});
    }
    catch(err) {
        res.status(401).send({"err": err.message});
    }
});



quizRouter.get("/quizzes", async (req, res) => {
    try {
        const quizzes = await QuizModel.find();
        // console.log(quizzes);

        res.status(200).send(quizzes);
    }
    catch(err) {
        res.status(401).send({"err": err.message});
    }
});


module.exports = {
    quizRouter
}