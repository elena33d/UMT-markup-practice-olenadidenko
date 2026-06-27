const fs = require("fs/promises");
const path = require("path");
const {
  listBouquets,
  getBouquetById,
  addBouquet,
  removeBouquets,
  updateBouquet,
  updatePhoto,
} = require("../services/bouquetServices");

const {
  createBouquetSchema,
  updateBouquetSchema,
} = require("../schemas/bouquetsSchemas");

const getAll = async (req, res, next) => {
  try {
    const bouquets = await listBouquets();
    res.json(bouquets);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bouquet = await getBouquetById(id);
    if (!bouquet) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(bouquet);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { error } = createBouquetSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    const bouquet = await addBouquet(req.body);
    res.status(201).json(bouquet);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Body must have at least one field" });
    }
    const { error } = updateBouquetSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    const { id } = req.params;
    const bouquet = await updateBouquet(id, req.body);
    if (!bouquet) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(bouquet);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bouquet = await removeBouquets(id);
    if (!bouquet) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(bouquet);
  } catch (error) {
    next(error);
  }
};

const updateBouquetPhoto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bouquet = await getBouquetById(id);
    if (!bouquet) {
      return res.status(404).json({ message: "Not found" });
    }

    const { path: tempPath, originalname } = req.file;
    const filename = `${id}_${originalname}`;
    const publicPath = path.join(__dirname, "../public/photos", filename);

    await fs.rename(tempPath, publicPath);

    const photoURL = `/photos/${filename}`;
    const updated = await updatePhoto(id, photoURL);

    res.json({ photoURL: updated.photoURL });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, create, update, remove, updateBouquetPhoto };