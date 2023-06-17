const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
    creator: {type: String},
    title: {type: String},
    description: {type: String},
    questions: {type: []}
});

const QuizModel = mongoose.model("quizzes", quizSchema);

module.exports = {
    QuizModel
}
