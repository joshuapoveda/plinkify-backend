const express = require("express");
const Plink = require("../models/plinkModel");

const router = express.Router();

//Index New Delete Update Create Edit Show

//get all plinks
router.get("/", (req, res) => {
  res.json({ message: "GET ALL PLINKS" });
});

//DELETE a plink
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE A PLINK" });
});

//POST a new plink
router.post("/", async (req, res) => {
  const { title, description, url1 } = req.body;
  try {
    const plink = await Plink.create({
      title,
      description,
      url1,
    });
    res.status(200).json(plink);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//UPDATE a plink
router.patch("/:id", (req, res) => {
  res.json({ message: "POST A NEW PLINK" });
});

//get a single plink
router.get("/:id", (req, res) => {
  res.json({ message: "GET SINGLE PLINK" });
});

module.exports = router;
