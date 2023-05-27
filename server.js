require('dotenv').config()

const express = require("express");

//express app
const app = express();

//middleware
app.use((req,res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.get("/", (req, res) => {
  res.json({message: 'Test welcome message'})
});

//listener
app.listen(process.env.PORT, () => {
  console.log("listening on port 3000!!");
});
