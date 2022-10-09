const mongoose = require("mongoose");


  const Cars = mongoose.model(
    "cars",
   new mongoose.Schema(
         {
           model: String,  
           make: String,
           year: String,
           mileage: String,
           listPrice: String  
         },
         { timestamps: true }
       ));
      
       module.exports = Cars;     