const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.get("/", function (req, res) {
  usersController.getUsers(req, res);
});

router.get("/:id", function (req, res) {
  usersController.getOneUsers(req, res);
});

module.exports = {
  router,
}; 
