const express = require('express');
const path = require('path');

const auth         = require('./auth');
const user         = require('./user');
const users        = require('./users');
const todos        = require('./todos');
const test         = require('./test');
const survey       = require('./survey');
const answer       = require('./answer');
const importQs     = require('../resources/surveyQuestions')

const router = express.Router();

router.use('/api/auth', auth);
router.use('/api/user', user);
router.use('/api/users', users);
router.use('/api/todos', todos);
router.use('/api/test', test);
router.use('/api/survey', survey);
router.use('/api/answer', answer);

router.get('/api/tags', (req, res) => {
  res.send([
    'MERN', 'Node', 'Express', 'Webpack', 'React', 'Redux', 'Mongoose',
    'Bulma', 'Fontawesome', 'Ramda', 'ESLint', 'Jest', 'Enzyme',
  ]);
});

router.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
  importQs.getQuestions();
});

module.exports = router;
