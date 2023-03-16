const express = require("express");
var bodyParser = require("body-parser");
const usersRoute = require("./routes/users.route");
const hotelRoute = require("./routes/hotel.route");
const rentsRoute = require("./routes/rents.route");
const app = express();

app.use(bodyParser.json({ extended: false }));

app.use("/users", usersRoute.router);
app.use("/hotel", hotelRoute.router);
app.use("/rents", rentsRoute.router);

app.listen(3030, () => {
  console.log("App is listening on port 3030...");
});
