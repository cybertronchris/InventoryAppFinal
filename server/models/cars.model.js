module.exports = mongoose => {
    var schema = mongoose.schema(
         {
           model: String,  
           make: String,
           year: String,
           mileage: String,
           listPrice: String  
         },
         { timestamps: true }
       );
       schema.method("toJSON", function(){
         const {_v, _id, ...object} = this.toObject();
         object.id = _id;
         return object;
       });
       const Cars = mongoose.model("cars", schema);
       return Cars;
   
   };