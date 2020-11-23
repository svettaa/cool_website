const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const training = mongoose.model("training", new Schema({
    name: String,
    description: String
}, {collection: "training"}))


mongoose.Promise = global.Promise;
const modlTrainings = {};
modlTrainings.mongoose = mongoose;
modlTrainings.training = training;
module.exports = modlTrainings
