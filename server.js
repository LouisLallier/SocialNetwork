const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");
require("dotenv").config({ path: "./config/.env" });
const app = express();
const db = require("./config/db");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

db.connect(process.env.MONGODB_URI);

//routes
app.use("/api/user", userRoutes);

//server
app.listen(5000, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
