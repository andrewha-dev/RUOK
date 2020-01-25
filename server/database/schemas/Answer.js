const R = require('ramda');
const mongoose = require('mongoose');
const immutablePlugin = require('mongoose-immutable');

const { Schema } = mongoose;

const answerSchema = new Schema({
    identity: { type: String },
    points: {type: Number},
    added_on: {type: Date},
});

answerSchema.plugin(immutablePlugin);

answerSchema.methods.hide = function() {
    return R.omit(['__v'], this.toObject());
};

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;