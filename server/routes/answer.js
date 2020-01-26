const express = require("express");
const { checkAdminAccess } = require('./middleware');
const { Answer } = require('../database/schemas');

const router = express.Router();

module.exports = router;

router.get("/", checkAdminAccess, (req, res) => {
    Answer.find({}, (err, questions) => {
        if(err) {
            res.status(400).send({message: "No answers found"});
        }
        else {
            res.status(200).send({question: questions});
        }
    });
});