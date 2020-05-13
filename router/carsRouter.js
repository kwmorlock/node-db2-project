const express = require("express");

const db = require("../data/dbConnection.js");

const router = express.Router();

router.get("/", (req, res) => {
    db("cars") //name of table
      .then(cars => {
        res.json(cars);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve vroom" });
      });
  });

  router.get("/:id", (req, res) => {
    const { id } = req.params;
  
    db("cars")
      .where({ id })
      .first()
      .then(car => {
        res.json(car);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to retrieve vroom" });
      });
  });


module.exports = router;



