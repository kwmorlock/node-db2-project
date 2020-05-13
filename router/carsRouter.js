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


  router.put("/:id", (req, res) => {
    const changes = req.body;
  
    db("cars")
      .where({ id: req.params.id })
      .update(changes)
      .then(count => {
        if (count > 0) {
          res.status(200).json({ data: count });
        } else {
          res.status(404).json({ message: "record not found by that Id" });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: error.messsage });
      });
  });

  router.delete("/:id", (req, res) => {
    db("cars")
      .where({ id: req.params.id })
      .del()
      .then(count => {
        if (count > 0) {
          res.status(200).json({ data: count });
        } else {
          res.status(404).json({ message: "record not found by that Id" });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: error.messsage });
      });
  });



module.exports = router;



