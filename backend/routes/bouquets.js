const express = require("express");
const router = express.Router();
const bouquetsController = require("../controllers/bouquetsControllers");

router.get("/", bouquetsController.getAll);
router.get("/:id", bouquetsController.getById);
router.post("/", bouquetsController.create);
router.put("/:id", bouquetsController.update);
router.delete("/:id", bouquetsController.remove);

module.exports = router;