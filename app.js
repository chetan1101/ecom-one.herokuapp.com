
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const PORT  = process.env.PORT || 5000
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");

app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

mongoose.connect(
  process.env.DB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true },
  (err) => {
    err
      ? console.log("error found")
      : console.log("connect sucessfull with mongodb");
  }
);

//production
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  const path = require('path');
  app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

app.listen(PORT, () => console.log("server is running on port" + PORT));
