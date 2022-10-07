const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(express.json())

const dbo = require("./db/conn");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
}); 
app.listen(port, () => {
  dbo.connectToServer(function(err){
    if (err) console.log(err);
  });

  console.log(`Server is running on port: ${port}`);
});

mongoose.connect(
  process.env.ATLAS_URI,
  
  (err)=>{
    if (err)throw err;
    console.log('Mongo DB Connection Established'); 
  }
);

app.use("/users", require("./routes/users"));
app.use("/car", require("./routes/car"));
