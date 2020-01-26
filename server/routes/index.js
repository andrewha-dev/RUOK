const express = require('express');
const path = require('path');

const auth         = require('./auth');
const user         = require('./user');
const users        = require('./users');
const todos        = require('./todos');
const test         = require('./test');
const survey       = require('./survey');
const answer       = require('./answer');

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
});

module.exports = router;
