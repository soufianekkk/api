const fs = require("fs");
const path = require("path");
const clientsFilePath = path.join(process.cwd(), "data", "clients.json");
const clientsFile = fs.readFileSync(clientsFilePath);
const clientsData = JSON.parse(clientsFile).clients;

function getClients() {
  return clientsData;
}

function getClientById(id) {
  return clientsData.find((client) => client.id == id);
}

module.exports = {
  getClients,
  getClientById,
};
