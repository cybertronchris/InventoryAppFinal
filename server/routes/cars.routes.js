






  module.exports = function(app) {
  // Create a new 
   app.post("/api/test/cars/add")

  // Retrieve all cars
  app.get("/api/test/cars")




  app.get("/api/test/cars:id")

  // Update  with id
  app.put("/api/test/cars:id")
 

  // Delete  with id
  app.delete("/api/test/cars:id")


  //Delete all
  app.delete("/api/test/cars")

}