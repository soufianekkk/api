const usersService = require("../services/users.services");

function getUsers(req, res) {
  const allUsers = usersService.getClients();
  res.send({
    users: allUsers,
  });
}

function getOneUsers(req, res) {
  const id = req.params.id;
  console.log(id);
  const oneUser = usersService.getClientById(id);
  res.send({
    user: oneUser,
  });
}

module.exports = {
  getUsers,
  getOneUsers,
};
