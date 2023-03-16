const hotelService = require("../services/hotel.services");

function rents(req, res) {
  const idRoom = req.body.idRoom;
  const idClient = req.body.idClient;

  res.send({
    message: `Le client ${idRoom}  a reserver la chambre ${idClient}`,
  });
}

module.exports = {
  rents,
};
