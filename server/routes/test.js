const express = require('express');
const {User} = require('../database/schemas');
const Answer = require('../database/schemas');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {

    const user0 = {};
    user0.username  = "11111";
    user0.username_case = "11111";
    user0.password = "password 1"
    //
    // const user1 = mongoose.model("User", new Schema({username: "22222", username_case: "User6", password: "password2"}));
    // const user2 = mongoose.model("User", new Schema({username: "33333", username_case: "User2", password: "password3"}));
    // const user3 = mongoose.model("User", new Schema({username: "44444", username_case: "User3", password: "password4"}));
    // const user4 = mongoose.model("User", new Schema({username: "55555", username_case: "User4", password: "password5"}));
    //
    //
    // const answer0 = mongoose.model("Answer", new Schema({identity: "uwu", points: 10, added_on: Date.now()}));
    // const answer1 = mongoose.model("Answer", new Schema({identity: "owo", points: 20, added_on: Date.now()}));
    // const answer2 = mongoose.model("Answer", new Schema({identity: "ewe", points: 30, added_on: Date.now()}));
    // const answer3 = mongoose.model("Answer", new Schema({identity: ">w<", points: 40, added_on: Date.now()}));
    // const answer4 = mongoose.model("Answer", new Schema({identity: "qwq", points: 50, added_on: Date.now()}))

    user0.hashPassword().then(() => {
        user0.save((err, savedUser) => {
            if (err || !savedUser) {
                res.status(400).send({ message: 'Create user failed', err });
            } else {
                res.send({ message: 'User created successfully', user: savedUser.hidePassword() });
            }
        });
    });
    // user1.hashPassword().then(() => user1.save((err, savedUser) => {
    //     if (err || !savedUser) {
    //         res.status(400).send({ message: 'Create user failed', err });
    //     } else {
    //         res.send({ message: 'User created successfully', user: savedUser.hidePassword() });
    //     }
    // }));
    // user2.hashPassword().then(() => user1.save((err, savedUser) => {
    //     if (err || !savedUser) {
    //         res.status(400).send({ message: 'Create user failed', err });
    //     } else {
    //         res.send({ message: 'User created successfully', user: savedUser.hidePassword() });
    //     }
    // }));
    // user3.hashPassword().then(() => user1.save((err, savedUser) => {
    //     if (err || !savedUser) {
    //         res.status(400).send({ message: 'Create user failed', err });
    //     } else {
    //         res.send({ message: 'User created successfully', user: savedUser.hidePassword() });
    //     }
    // }));
    // user4.hashPassword().then(() => user1.save((err, savedUser) => {
    //     if (err || !savedUser) {
    //         res.status(400).send({ message: 'Create user failed', err });
    //     } else {
    //         res.send({ message: 'User created successfully', user: savedUser.hidePassword() });
    //     }
    // }));
    //
    // answer0.save();
    // answer1.save();
    // answer2.save();
    // answer3.save();
    // answer4.save();

    res.send(['Database populated']);
});