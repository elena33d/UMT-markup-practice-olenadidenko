const Bouquet = require("../app/models/bouquet");

const getAll = async (req, res, next) => {
  try {
    const bouquets = await Bouquet.findAll();
    res.json(bouquets);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { bouquetId } = req.params;
    const bouquet = await Bouquet.findByPk(bouquetId);
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
    const bouquet = await Bouquet.create(req.body);
    res.status(201).json(bouquet);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { bouquetId } = req.params;
    const bouquet = await Bouquet.findByPk(bouquetId);
    if (!bouquet) {
      return res.status(404).json({ message: "Not found" });
    }
    await bouquet.update(req.body);
    res.json(bouquet);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { bouquetId } = req.params;
    const bouquet = await Bouquet.findByPk(bouquetId);
    if (!bouquet) {
      return res.status(404).json({ message: "Not found" });
    }
    await bouquet.destroy();
    res.json({ message: "Bouquet deleted" });
  } catch (error) {
    next(error);
  }
};

const updateStatusBouquet = async (bouquetId, body) => {
  const bouquet = await Bouquet.findByPk(bouquetId);
  if (!bouquet) return null;
  await bouquet.update(body);
  return bouquet;
};

const updateFavorite = async (req, res, next) => {
  try {
    const { bouquetId } = req.params;
    const { favorite } = req.body;
    if (favorite === undefined) {
      return res.status(400).json({ message: "missing field favorite" });
    }
    const bouquet = await updateStatusBouquet(bouquetId, { favorite });
    if (!bouquet) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(bouquet);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, create, update, remove, updateFavorite };