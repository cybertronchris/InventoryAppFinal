module.exports = app => {
  const controller = require("../controllers/cars.controller");

  module.exports = function(app) {
  // Create a new 
   app.post("/api/test/cars", controller.admin);

  // Retrieve all cars
  app.get("/api/test/cars", controller.allAccess);




  app.get("/api/test/cars:id", controller.allAccess);

  // Update  with id
  app.put("/api/test/cars:id", controller.admin);

  // Delete  with id
  app.delete("/api/test/cars:id", controller.admin);

  // Create a new Tutorial
  app.delete("/api/test/cars", controller.admin);

}}