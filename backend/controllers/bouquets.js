const getAll = async (req, res, next) => {
  try {
    res.json({ message: "Bouquets route works!" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };