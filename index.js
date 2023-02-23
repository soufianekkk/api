const express = require("express");
const usersRoute = require("./routes/users.route");
const app = express();

app.use("/users", usersRoute.router);

app.listen(3030, () => {
  console.log("App is listening on port 3000...");
});
