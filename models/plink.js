const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plinkSchema = new Schema({
  title: { type: String, required: true },
  Description: { type: String, required: true },
  url1: { type: String, required: true },
  url2: { type: String, required: true },
  url3: { type: String, required: true },
  url4: { type: String, required: true },
  url5: { type: String, required: true },
  url6: { type: String, required: true },
  url7: { type: String, required: true },
  url8: { type: String, required: true },
  url9: { type: String, required: true },
  url10: { type: String, required: true },
});
