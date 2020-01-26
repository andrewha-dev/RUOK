const express = require("express");
const { requireAuth } = require('./middleware');
const { Survey } = require('../database/schemas');
const { Answer } = require('../database/schemas');
const mongoose = require('mongoose');

const router = express.Router();

module.exports = router;

router.get("/", requireAuth, (req, res) => {
    Survey.find().distinct('question', (err, questions) => {
        if(err) {
            res.status(400).send({message: "No questions found"});
        }
        else {
            res.status(200).send({question: questions});
        }
    });
});

router.post("/", requireAuth, (req, res) => {
    let answers = req.body.answers;
    console.log(answers);
    let score = 0;
    for( let index = 0; index < answers.length ; ++index ){
        score += answers[index].value;
    }
    const answerModel = mongoose.model("Answer");
    const newAnswer = new answerModel;

    if(!req.user) {
        res.status(400).send({message: "Unable to record answer, requires team name"});
    }
    else {
        newAnswer.identity = req.user.username_case;
        newAnswer.points = score;
        newAnswer.added = Date.now();

        newAnswer.save((err, savedAnswer) => {
            if (err) {
                res.status(400).send({message: "Unable to record answer"});
            }
            else {
                res.status(200).send({message: "Answer has been recorded", answer: savedAnswer});
            }
        });
    }
});