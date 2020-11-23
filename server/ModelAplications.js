const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const applications = mongoose.model("application", new Schema({
    name: String,
    surname:String,
    email:String,
    phone:String,
    description: String,
    varificated:Boolean,
    token : String,
}, {collection: "application"}))


mongoose.Promise = global.Promise;
const modelAplications = {};
modelAplications.mongoose = mongoose;
modelAplications.aplication = applications;
module.exports = modelAplications;
