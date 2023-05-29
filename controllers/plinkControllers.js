const Plink = require("../models/plinkModel");
const mongoose = require("mongoose");

//get all plinks
const getAllPlinks = async (req, res) => {
    const allPlinks = await Plink.find({}).sort({ createdAt: -1 });
    res.status(200).json(allPlinks);
};

//get single plink
const getSinglePlink = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "The Plink does not exist" });
  }
  const plink = await Plink.findById(id);
  if (!plink) {
    return res.status(400).json({ error: "Plink is not plinking :(" });
  }
  res.status(200).json(plink);
};

//create new plink
const createPlink = async (req, res) => {
  const {
    title,
    description,
    url1,
    url2,
    url3,
    url4,
    url5,
    url6,
    url7,
    url8,
    url9,
    url10,
  } = req.body;
  //adding doc to db
  try {
    const plink = await Plink.create({
      title,
      description,
      url1,
      url2,
      url3,
      url4,
      url5,
      url6,
      url7,
      url8,
      url9,
      url10,
    });
    res.status(200).json(plink);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete plink
const deletePlink = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "The Plink does not exist" });
  }
  const plink = await Plink.findOneAndDelete({ _id: id });
  if (!plink) {
    return res.status(400).json({ error: "Plink is not plinking :(" });
  }
  res.status(200).json(plink);
};

//update plink
const updatePlink = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "The Plink does not exist" });
  }
  const plink = await Plink.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!plink) {
    return res.status(400).json({ error: "Plink is not plinking :(" });
  }
  res.status(200).json(plink);
};

module.exports = {
  createPlink,
  getAllPlinks,
  getSinglePlink,
  deletePlink,
  updatePlink,
};
