const db = require("../models");
const Car = db.cars;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.model) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create 
    const car = new Car({
        model: req.body.model,
        make: req.body.make,
        year: req.body.year,
        mileage: req.body.mileage,
        listPrice: req.body.listPrice,
    });
  
    // Save in the database
    car
      .save(car)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating."
        });
      });
  };

  exports.findAll = (req, res) => {
    const model = req.query.model;
    var condition = model ? { model: { $regex: new RegExp(model), $options: "i" } } : {};
  
    Car.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving."
        });
      });
  };
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Car.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving with id=" + id });
      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Car.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Car with id=${id}. Maybe Car was not found!`
          });
        } else res.send({ message: "Car was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Car with id=" + id
        });
      });
  }; 
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Car.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Car with id=${id}. Maybe Car was not found!`
          });
        } else {
          res.send({
            message: "Car was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Car with id=" + id
        });
      });
  };
  exports.deleteAll = (req, res) => {
    Car.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Cars were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };