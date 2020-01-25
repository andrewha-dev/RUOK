const express = require("express");
const { requireAuth } = require('./middleware');
const { User, Answer } = require('../database/schemas');

const router = express.Router();
const endpoint = "/test";

module.exports = router;

router.get(endpoint, (req, res) => {
    const user0 = new User({username: "user0", username_case: "User0", password: "password", team: "team0"});
    const user1 = new User({username: "user1", username_case: "User1", password: "password", team: "team1"});
    const user2 = new User({username: "user2", username_case: "User2", password: "password", team: "team2"});
    const user3 = new User({username: "user3", username_case: "User3", password: "password", team: "team3"});
    const user4 = new User({username: "user4", username_case: "User4", password: "password", team: "team4"});

    const question0 = new Survey({question: "uwu?"});
    const question1 = new Survey({question: "owo?"});
    const question2 = new Survey({question: "ewe?"});
    const question3 = new Survey({question: ">w<?"});
    const question4 = new Survey({question: "qwq?"});



    res.send("Database populated");
});