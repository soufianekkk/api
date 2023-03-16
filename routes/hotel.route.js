const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotel.controller");

router.get("/", function (req, res) {
  hotelController.getHotel(req, res);
});

router.get("/rooms", function (req, res) {
  hotelController.getRooms(req, res);
});

router.get("/rooms/:id", function (req, res) {
  hotelController.getOneRoom(req, res);
});
module.exports = {
  router,
};
