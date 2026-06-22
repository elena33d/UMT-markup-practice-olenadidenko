const express = require("express");
const router = express.Router();
const bouquetsController = require("../controllers/bouquets");

router.get("/", bouquetsController.getAll);

module.exports = router;