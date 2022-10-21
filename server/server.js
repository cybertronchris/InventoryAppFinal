const express = require("express");
<<<<<<< HEAD
const cors = require("cors");
//added line below
const bodyParser = require('body-parser');
const app = express();
const db = require("./models");
const Role = db.role;
var corsOptions = {
  origin: "http://localhost:3000"
=======

const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();

const db = require("./models");
const Role = db.role;
var corsOptions = {
  origin: "http://localhost:5000"
>>>>>>> 9f8b111abd72170e207b80da02a7a11e065ca888
};

app.use(cors(corsOptions));

<<<<<<< HEAD
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

=======
app.use(cors(corsOptions));
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({ extended: true}));
app.get("/",(req, res) => {
  res.json({ message: 'Welcome'});
});

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

require('./routes/auth.routes') (app)
require('./routes/user.routes')(app);






const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

db.mongoose
  .connect(
`mongodb+srv://dbuser:Password1!@cluster0.zuxhij4.mongodb.net/?retryWrites=true&w=majority`,
{    useNewUrlParser: true,
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

>>>>>>> 9f8b111abd72170e207b80da02a7a11e065ca888
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 9f8b111abd72170e207b80da02a7a11e065ca888
