const Plink = require("../models/plinkModel");
const mongoose = require('mongoose')

//get all plinks
const getAllPlinks = async (req, res) => {
  try {
    const allPlinks = await Plink.find({}).sort({ createdAt: -1 });
    res.status(200).json(allPlinks);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching data");
  }
};

//get single plink

const getSinglePlink = async (req, res) => {
  
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "The Plink does not exist"})
    }
    const plink = await Plink.findById(id);
    if (!plink) {
      return res.status(404).json({ error: "Plink is not plinking :(" });
    }
    res.status(200).json(plink);
};

//create new plink
const createPlink = async (req, res) => {
  const { title, description, url1, url2 } = req.body;
  //adding doc to db
  try {
    const plink = await Plink.create({
      title,
      description,
      url1,
      url2,
    });
    res.status(200).json(plink);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete plink

//update plink

module.exports = {
  createPlink,
  getAllPlinks,
  getSinglePlink
};
