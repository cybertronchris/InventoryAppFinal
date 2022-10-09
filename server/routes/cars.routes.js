module.exports = app => {
  const controller = require("../controllers/cars.controller");

  module.exports = function(app) {
  // Create a new 
   app.post("/cars", cars.create);

  // Retrieve all cars
  app.get("/cars", cars.findAll);




  app.get("/cars:id", cars.findOne);

  // Update  with id
  app.put("/cars:id", cars.update);

  // Delete  with id
  app.delete("/cars:id", cars.delete);

  // Create a new Tutorial
  app.delete("/cars", cars.deleteAll);

}}