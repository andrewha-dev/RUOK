const R = require('ramda');
const mongoose = require('mongoose');
const { MongooseAutoIncrementID } = require('mongoose-auto-increment-reworked');
const immutablePlugin = require('mongoose-immutable');
const { Schema } = mongoose;

const answerSchema = new Schema({
    identity: { type: String },
    points: {type: Number},
    added_on: {type: Date},
});

answerSchema.plugin(MongooseAutoIncrementID.plugin, {
    modelName: 'Answer',
    field: 'answer',
    incrementBy: 1,
    startAt: 1,
    unique: true,
    nextCount: false,
    resetCount: false,
});

answerSchema.plugin(immutablePlugin);

answerSchema.methods.hide = function() {
    return R.omit(['__v'], this.toObject());
};

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;