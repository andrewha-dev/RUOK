const R = require('ramda');
const mongoose = require('mongoose');
const { MongooseAutoIncrementID } = require('mongoose-auto-increment-reworked');
const immutablePlugin = require('mongoose-immutable');
const { Schema } = mongoose;

const surveySchema = new Schema({
    question: { type: String }
});

// surveySchema.plugin(MongooseAutoIncrementID.plugin, {
//     modelName: 'Survey',
//     field: 'survey',
//     incrementBy: 1,
//     startAt: 1,
//     unique: false,
//     nextCount: false,
//     resetCount: false,
// });

// surveySchema.plugin(immutablePlugin);

surveySchema.methods.hide = function() {
    return R.omit(['__v', 'survey'], this.toObject());
};

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;