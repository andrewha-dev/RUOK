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


    const surveyModel = mongoose.model("Survey");

    const survey0 = new surveyModel();
    survey0.question = "I feel run down and drained of physical or emotional energy.";
    survey0.save();
    const survey1 = new surveyModel();
    survey1.question = "I have negative thoughts about my job.";
    survey1.save();
    const survey2 = new surveyModel();
    survey2.question = "I am harder and less sympathetic with people than perhaps they deserve.";
    survey2.save();
    const survey3 = new surveyModel();
    survey3.question = "I am easily irritated by small problems, or by my co-workers and team.";
    survey3.save();
    const survey4 = new surveyModel();
    survey4.question = "I feel misunderstood or unappreciated by my co-workers.";
    survey4.save();
    const survey5 = new surveyModel();
    survey5.question = "I feel that I have no one to talk to.";
    survey5.save();
    const survey6 = new surveyModel();
    survey6.question = "I feel that I am achieving less than I should.";
    survey6.save();
    const survey7 = new surveyModel();
    survey7.question = "I feel under an unpleasant level of pressure to succeed.";
    survey7.save();
    const survey8 = new surveyModel();
    survey8.question = "I feel that I am not getting what I want out of my job.";
    survey8.save();
    const survey9 = new surveyModel();
    survey9.question = "I feel that I am in the wrong organization or the wrong profession.";
    survey9.save();
    const survey10 = new surveyModel();
    survey10.question = "I am frustrated with parts of my job.";
    survey10.save();
    const survey11 = new surveyModel();
    survey11.question = "I feel that organizational politics or bureaucracy frustrate my ability to do a good job.";
    survey11.save();
    const survey12 = new surveyModel();
    survey12.question = "I feel that there is more work to do than I practically have the ability to do.";
    survey12.save();
    const survey13 = new surveyModel();
    survey13.question = "I feel that I do not have time to do many of the things that are important to doing a good quality job";
    survey13.save();
    const survey14 = new surveyModel();
    survey14.question = "I find that I do not have time to plan as much as I would like to.";
    survey14.save();

    res.send(['Database populated']);
});

router.get('/admin', (req, res) => {
    const userModel = mongoose.model("User");

    const user0 = new userModel();
    user0.username = "admin0";
    user0.username_case = "Admin0";
    user0.password = "adminpass0";
    user0.isAdmin = true;

    res.send(['Admin user created'])
});