const hotelService = require("../services/hotel.services");

function getHotel(req, res) {
  const hotel = hotelService.getHotel();
  res.send({
    hotel: hotel,
  });
}

function getRooms(req, res) {
  const rooms = hotelService.getRooms();
  res.send({
    Rooms: rooms,
  });
}

function getOneRoom(req,res) {
    const id = req.params.id;
    const oneRoom = hotelService.getChambreById(id);

    res.send({
        room: oneRoom,
    });
}

function rents(req,res) {
    const idRoom = req.body.idRoom;
    const idClient = req.body.idRoom;

    res.send({
        message: `Le client ${idRoom}  a reserver la chambre ${idClient}`,
    })
}

module.exports = {
  getHotel,
  getRooms,
  getOneRoom,
  rents,
};
