const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(express.json())

app.use(
  cors ({
      origin:'*'
  })
)
const posts =[
  {
    username: 'admin',
    title: 'Post 1'
  },
  {
    username: 'user',
    title: 'Post 2'
  }
  
]

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})

app.post('/login', (req, res) => {
  const username =req.body.username
  const user = { name: username }
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken : accessToken })
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers ['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify (token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  } )

}











app.use(cors());
app.use(express.json());
app.use(require("./routes/car"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});