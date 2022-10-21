const express = require("express");
const cors = require("cors");
//added line below
const bodyParser = require('body-parser');
const app = express();
const db = require("./models");
const Role = db.role;
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
//added 2 lines below
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome"});
  });

  require('./routes/auth.routes')(app);
  require('./routes/user.routes')(app);
  //added
 
  // set port, listen for requests
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

  db.mongoose
  .connect(`mongodb+srv://dbuser:Password1!@cluster0.zuxhij4.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
  console.log("added 'user' to roles collection");
});

new Role({
  name: "moderator"
}).save(err => {
  if (err) {
    console.log("error", err);
  }

  console.log("added 'moderator' to roles collection");
});

new Role({
  name: "admin"
}).save(err => {
  if (err) {
    console.log("error", err);
  }

  console.log("added 'admin' to roles collection");
});
}
});
}