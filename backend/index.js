const express = require("express");
// const bodyParser = require('body-parser');
const hotel_controller = require("./src/controllers/hotel.controller");
const address_controller = require("./src/controllers/address.controller");
const room_controller = require("./src/controllers/room.controller");

const app = express();

app.use(express.json());
// app.use(bodyParser.json());

app.use("/hotels", hotel_controller);
app.use("/addresses", address_controller);
app.use("/rooms", room_controller);

module.exports = app;
