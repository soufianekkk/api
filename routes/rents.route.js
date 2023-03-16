const express = require("express");
const router = express.Router();
const rentsController = require("../controllers/rents.controller");

router.post("/", function (req, res) {
  rentsController.rents(req, res);
});


module.exports = {
  router,
};
