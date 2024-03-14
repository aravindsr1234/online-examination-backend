const mongoose = require('mongoose');
const question = require('../model/questions');

const seedProducts = [
    {
        question: "what is your name?",
        answer: ["a", "b", "c", "d"]
    },
    {
        question: "what is your name?",
        answer: ["a", "b", "c", "d"]
    },
    {
        question: "what is your name?",
        answer: ["a", "b", "c", "d"]
    },
    {
        question: "what is your name?",
        answer: ["a", "b", "c", "d"]
    },
    {
        question: "what is your name?",
        answer: ["a", "b", "c", "d"]
    },
];

const seedDb = async () => {
    // await question.deleteMany({});
    await question.insertMany(seedProducts);
};

seedDb().then(() => {
    mongoose.connection.close();
});