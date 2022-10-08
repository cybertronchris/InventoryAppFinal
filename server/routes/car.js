module.exports = app => {
  const cars = require("../controllers/cars.controller.js");

  var router = require("express").Router();

  // Create a new 
router.post("/cars", cars.create);

  // Retrieve all cars
  router.get("/cars/cars", cars.findAll);




  router.get("/cars:id", cars.findOne);

  // Update  with id
  router.put("/cars:id", cars.update);

  // Delete  with id
  router.delete("/cars:id", cars.delete);

  // Create a new Tutorial
  router.delete("/cars", cars.deleteAll);

  app.use('/api/cars', router);
};