const fs = require("fs");
const path = require("path");
const hotelFilePath = path.join(process.cwd(), "data", "hotel.json");
const hotelFile = fs.readFileSync(hotelFilePath);
const hotelData = JSON.parse(hotelFile);
const hotelChambreData = JSON.parse(hotelFile).rooms;

function getHotel() {
  return hotelData;
}

function getRooms() {
  return hotelChambreData;
}

function getChambreById(id) {
  return hotelChambreData.find((rooms) => rooms.id == id);
}


module.exports = {
  getHotel,
  getRooms,
  getChambreById,
  
};
