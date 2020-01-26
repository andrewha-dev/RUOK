const express = require("express");
const { requireAuth } = require('./middleware');
const { Survey, Answer } = require('../database/schemas');

const router = express.Router();

module.exports = router;

router.get("/", requireAuth, (req, res) => {
    Survey.find({}, (err, questions) => {
        if(err) {
            res.status(400).send({message: "No questions found"});
        }
        else {
            res.status(200).send({question: questions});
        }
    });
});

router.post("/", requireAuth, (req, res) => {
    const newAnswer = new Answer(req.body.completedSurvey);
    newAnswer.save(savedAnswer => {
        if(!req.body.identity) {
            res.status(400).send({message: "Unable to record answer, team name"});
        }
        res.status(200).send({message: "Answer has been recorded", answer: savedAnswer});
    }).catch(err => {
        res.status(400).send({message: "Unable to record answer"});
    });
});