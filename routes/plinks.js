const express = require("express");

const {
  createPlink,
  getAllPlinks,
  getSinglePlink,
  deletePlink,
  updatePlink,
} = require("../controllers/plinkControllers");

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

//requiring auth in order to call routes
router.use(requireAuth)

//Index New Delete Update Create Edit Show

//get all plinks
router.get("/", getAllPlinks);

//get a single plink
router.get("/:id", getSinglePlink);

//POST a new plink
router.post("/", createPlink);

//DELETE a plink
router.delete("/:id", deletePlink);

//UPDATE a plink
router.patch("/:id", updatePlink);

module.exports = router;
