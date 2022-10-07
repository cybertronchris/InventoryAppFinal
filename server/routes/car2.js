module.exports = app => {
    const cars = require("../controllers/cars.controller.js");
  
    var router = require("express").Router();
  
    // Create a new cars
    router.post("/cars", cars.create);
  
    // Retrieve all cars
    router.get("/cars", cars.findAll);

  
    // Retrieve a single cars with id
    router.get("/:id", cars.findOne);
  
    // Update a cars with id
    router.put("/:id", cars.update);
  
    // Delete a cars with id
    router.delete("/:id", cars.delete);
  
    // Create a new cars
    router.delete("/cars", cars.deleteAll);
  
    app.use('/api/cars', router);
  };
Footer
