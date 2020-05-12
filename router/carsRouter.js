const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    db("cars") //name of table
      .then(cars => {
        res.json(cars;
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve fruits" });
      });
  });






module.exports = router;

