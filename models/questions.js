var mongoose = require('mongoose');

var questionsSchema = new mongoose.Schema({
    index: { type: Number },
    question: { type: String },
    options: { type: Array },
    answerOption: { type: String },
    answerValue: { type: String }
});

var Questions = mongoose.model('Questions', questionsSchema);

module.exports = Questions;