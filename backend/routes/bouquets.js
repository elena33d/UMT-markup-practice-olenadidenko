const express = require("express");
const router = express.Router();
const bouquetsController = require("../controllers/bouquets");

router.get("/", bouquetsController.getAll);
router.get("/:bouquetId", bouquetsController.getById);
router.post("/", bouquetsController.create);
router.put("/:bouquetId", bouquetsController.update);
router.delete("/:bouquetId", bouquetsController.remove);
router.patch("/:bouquetId/favorite", bouquetsController.updateFavorite);

module.exports = router;