const express = require("express");
const path = require("path");
const { requireAuth } = require('./middleware');
const { Survey, Answer } = require('../database/schemas');

const router = express.Router();
const endpoint = "/survey";

router.get(endpoint, requireAuth(), (req, res) => {
    res.json(Survey.getAll("question"));
});

router.put(endpoint, requireAuth(), (req, res) => {
    Answer.add(req.identity, req.points, Date.now(), (err) => {
        if (err) {
            res.status(400).send({message: "Unable to record answer"});
        }
        else {
            res.status(200).send({message: "Answer has been recorded"});
        }
    });
});