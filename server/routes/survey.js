const express = require("express");
const { requireAuth } = require('./middleware');
const { Survey, Answer } = require('../database/schemas');

const router = express.Router();
const endpoint = "/survey";

router.get(endpoint, requireAuth(), (req, res) => {
    res.json(Survey.getAll("question"));
});

router.post(endpoint, requireAuth(), (req, res) => {
    const newAnswer = Answer(req.body);
    newAnswer.save(savedAnswer => {
        res.status(200).send({message: "Answer has been recorded", answer: savedAnswer});
    }).catch(err => {
        res.status(400).send({message: "Unable to record answer"});
    });
});