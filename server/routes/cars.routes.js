const express = require('express');
const app = express();
const carRoutes = express.Router();

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });










   
    carRoutes.routes('/').get(function(req, res){
      cars.find(function(err, cars){
        if (err){
          console.log(err);
        }else{
          res.json(cars);
        }
      })
    })
  // Create a new 


  carRoutes.routes("/add").post(function(req, res){
    let car = new Car(req.body);
    car.save()
      .then(todo => {
        res.status(200).json({'cars': 'Cars added successfully'});
      })
      .catch(err => {
        res.status(400).send('adding new car failed');
      });
   });
   

  // Retrieve all cars
  app.get("/api/test/cars")




  app.get("/:id")
        (function(req, res){
    let id = req.params.id;
    cars.findById(id, function(err, todo){
      res.json(cars);
    })
  })

  // Update  with id
  carRoutes.routes("/update:id").post(function(req, res){
    cars.findById(req.params.id, function(err, car){
      if (!car)
        res.status(404).send("NOT FOUND!");
        else
       car.model = req.body.car.model;
       car.make = req.body.car.make;
       car.year = req.body.car.year;
       car.mileage = req.body.car.mileage;
       car.priceList = req.body.car.priceList;

       car.save().then(car=> {
        res.jsno("UPDATED");
       })
       .catch(err=> {
        res.status(400).send("update not possible");
       });

    })
  });
 

  // Delete  with id
  app.delete("/api/test/cars:id")


  //Delete all
  app.delete("/api/test/cars")
};
