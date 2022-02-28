/** @format */

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const wareHouseRouter = require("../src/Router/wareHouseRouter.js");

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/api", wareHouseRouter);
app.use((req, res, next) => {
  res.send("Frank's second hand garadge server");
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
