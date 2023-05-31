const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plinkSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    url1: { type: String, required: true },
    url2: { type: String, required: false },
    url3: { type: String, required: false },
    url4: { type: String, required: false },
    url5: { type: String, required: false },
    url6: { type: String, required: false },
    url7: { type: String, required: false },
    url8: { type: String, required: false },
    url9: { type: String, required: false },
    url10: { type: String, required: false },
    user_id: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("plink", plinkSchema);
