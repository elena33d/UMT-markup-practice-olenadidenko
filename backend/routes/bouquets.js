const express = require("express");
const router = express.Router();
const bouquetsController = require("../controllers/bouquetsControllers");
const upload = require("../middlewares/upload");

router.get("/", bouquetsController.getAll);
router.get("/:id", bouquetsController.getById);
router.post("/", bouquetsController.create);
router.put("/:id", bouquetsController.update);
router.delete("/:id", bouquetsController.remove);
router.patch("/:id/photos", upload.single("photo"), bouquetsController.updateBouquetPhoto);

module.exports = router;