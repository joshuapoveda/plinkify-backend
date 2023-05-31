require('dotenv').config()

const mongoose = require("mongoose")
const express = require("express");
const plinkRoutes = require('./routes/plinks')
const userRoutes = require('./routes/user')

//express app
const app = express();

//middleware
app.use(express.json())

app.use((req,res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/plinks',plinkRoutes)
app.use('/api/user',userRoutes)

// // DB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  app.listen(process.env.PORT, () => {
    console.log("connected to mongo and listening on port", process.env.PORT);
  });
})
.catch((error) => {
  console.log(error)
})