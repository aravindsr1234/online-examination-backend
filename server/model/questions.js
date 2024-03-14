const mongoose = require('mongoose');

const questions = mongoose.Schema({
    question: String,
    answer: []
});

const question= mongoose.model('question', questions);

module.exports = question;