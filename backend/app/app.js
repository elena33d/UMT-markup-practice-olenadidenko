const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { connectDB, sequelize } = require("../configs/db");

const bouquetsRouter = require("../routes/bouquets");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/bouquets", bouquetsRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

connectDB().then(() => {
  sequelize.sync({ force: false }).then(() => {
    console.log("Tables synced");
  });
});

module.exports = app;