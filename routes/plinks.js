const express = require("express");

const {
  createPlink,
  getAllPlinks,
  getSinglePlink,
} = require("../controllers/plinkControllers");

const router = express.Router();

//Index New Delete Update Create Edit Show

//get all plinks
router.get("/", getAllPlinks);

//DELETE a plink
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE A PLINK" });
});

//POST a new plink
router.post("/", createPlink);

//UPDATE a plink
router.patch("/:id", (req, res) => {
  res.json({ message: "POST A NEW PLINK" });
});

//get a single plink
router.get("/:id", getSinglePlink);

module.exports = router;
