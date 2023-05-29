const express = require("express");

const {
  createPlink,
  getAllPlinks,
  getSinglePlink,
  deletePlink,
  updatePlink
} = require("../controllers/plinkControllers");

const router = express.Router();

//Index New Delete Update Create Edit Show

//get all plinks
router.get("/", getAllPlinks);

//DELETE a plink
router.delete("/:id", deletePlink);

//POST a new plink
router.post("/", createPlink);

//UPDATE a plink
router.patch("/:id", updatePlink);

//get a single plink
router.get("/:id", getSinglePlink);

module.exports = router;
