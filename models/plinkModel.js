const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plinkSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url1: { type: String, required: true }
}, {timestamps: true});

module.exports = mongoose.model('plink', plinkSchema)
