const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    const userModel = mongoose.model("User");
    const answerModel = mongoose.model("Answer");

    const user0 = new userModel();
    user0.username = "user0";
    user0.username_case = "User0";
    user0.password = "password0";

    const user1 = new userModel();
    user1.username = "user1";
    user1.username_case = "User1";
    user1.password = "password1";

    const user2 = new userModel();
    user2.username = "user2";
    user2.username_case = "User2";
    user2.password = "password2";

    const user3 = new userModel();
    user3.username = "user3";
    user3.username_case = "User3";
    user3.password = "password3";

    const user4 = new userModel();
    user4.username = "user4";
    user4.username_case = "User4";
    user4.password = "password4";

    const answer0 = new answerModel();
    answer0.identity = "uwu";
    answer0.points = 10;
    answer0.added_on = Date.now();

    const answer1 = new answerModel();
    answer1.identity = "uwu";
    answer1.points = 11;
    answer1.added_on = Date.now();

    const answer2 = new answerModel();
    answer2.identity = "uwu";
    answer2.points = 12;
    answer2.added_on = Date.now();

    const answer3 = new answerModel();
    answer3.identity = "uwu";
    answer3.points = 13;
    answer3.added_on = Date.now();

    const answer4 = new answerModel();
    answer4.identity = "uwu";
    answer4.points = 14;
    answer4.added_on = Date.now();

    user0.hashPassword().then(() => {
        user0.save((err, savedUser) => {
            if (err || !savedUser) {
                res.status(400).send({ message: 'Create user failed', err });
            } else {
                res.send({ message: 'User created successfully', user: savedUser.hidePassword() });
            }
        });
    });
    user1.hashPassword().then(() => user1.save((err, savedUser) => {
        if (err || !savedUser) {
            res.status(400).send({ message: 'Create user failed', err });
        } else {
            res.send({ message: 'User created successfully', user: savedUser.hidePassword() });
        }
    }));
    user2.hashPassword().then(() => user2.save((err, savedUser) => {
        if (err || !savedUser) {
            res.status(400).send({ message: 'Create user failed', err });
        } else {
            res.send({ message: 'User created successfully', user: savedUser.hidePassword() });
        }
    }));
    user3.hashPassword().then(() => user3.save((err, savedUser) => {
        if (err || !savedUser) {
            res.status(400).send({ message: 'Create user failed', err });
        } else {
            res.send({ message: 'User created successfully', user: savedUser.hidePassword() });
        }
    }));
    user4.hashPassword().then(() => user4.save((err, savedUser) => {
        if (err || !savedUser) {
            res.status(400).send({ message: 'Create user failed', err });
        } else {
            res.send({ message: 'User created successfully', user: savedUser.hidePassword() });
        }
    }));

    answer0.save();
    answer1.save();
    answer2.save();
    answer3.save();
    answer4.save();

    res.send(['Database populated']);
});