const express = require("express");

const app = express();

const connect = require("./configs/db")


const hotelController = require("./controllers/hotel.controller");

app.use(express.json());

app.use("/hotel",hotelController);


app.listen(2345,async(res,rec)=>{
  await connect();
  console.log("Listening on port 2345...")
  
})