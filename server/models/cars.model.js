module.exports = mongoose => {
  const Cars = mongoose.model(
    "cars",
    mongoose.Schema(
         {
           model: String,  
           make: String,
           year: String,
           mileage: String,
           listPrice: String  
         },
         { timestamps: true }
       ));
      return Cars
        };