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

  router.post("/", (req, res) => {
    const carData = req.body;
    db("cars")
      .insert(carData)
      .then(ids => {
        db("cars")
          .where({ id: ids[0] })
          .then(newCarEntry => {
            res.status(201).json(newCarEntry);
          });
      })
      .catch(err => {
        console.log("POST error", err);
        res.status(500).json({ message: "Failed to store data" });
      });
  });


module.exports = router;



