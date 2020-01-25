const R = require('ramda');
const mongoose = require('mongoose');
const immutablePlugin = require('mongoose-immutable');

const { Schema } = mongoose;

const surveySchema = new Schema({
    question: { type: String },
});

surveySchema.plugin(immutablePlugin);

surveySchema.methods.hide = function() {
    return R.omit(['__v'], this.toObject());
};

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;