const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  height: Number,
  weight: Number,
  waist: Number,
  neck: Number,
  occupation: String,
  fitnessGoal: String,
  plan: String,
  phone: String,
});

module.exports = mongoose.model("Member", memberSchema);