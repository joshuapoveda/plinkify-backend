const express = require("express");

const router = express.Router();

//get all plinks
router.get("/", (req, res) => {
  res.json({ message: "GET ALL PLINKS" });
});
//get single plink
router.get("/:id", (req, res) => {
  res.json({ message: "GET SINGLE PLINK" });
});
//POST a plink
router.post("/", (req, res) => {
  res.json({ message: "POST A NEW PLINK" });
});
//DELETE a plink
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE A PLINK" });
});
//UPDATE a plink
router.patch("/:id", (req, res) => {
  res.json({ message: "POST A NEW PLINK" });
});

module.exports = router;
