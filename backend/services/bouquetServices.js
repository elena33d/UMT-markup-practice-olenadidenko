const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const gravatar = require("gravatar");

const bouquetsPath = path.join(__dirname, "../data/bouquets.json");

const listBouquets = async () => {
  const data = await fs.readFile(bouquetsPath, "utf-8");
  return JSON.parse(data);
};

const getBouquetById = async (id) => {
  const bouquets = await listBouquets();
  return bouquets.find((b) => b.id === id) || null;
};

const addBouquet = async (data) => {
  const bouquets = await listBouquets();
  const id = uuidv4();
  const photoURL = gravatar.url(id, { s: "200", r: "pg", d: "mm" }, true);
  const newBouquet = { id, ...data, photoURL };
  bouquets.push(newBouquet);
  await fs.writeFile(bouquetsPath, JSON.stringify(bouquets, null, 2));
  return newBouquet;
};

const removeBouquets = async (id) => {
  const bouquets = await listBouquets();
  const index = bouquets.findIndex((b) => b.id === id);
  if (index === -1) return null;
  const removed = bouquets.splice(index, 1);
  await fs.writeFile(bouquetsPath, JSON.stringify(bouquets, null, 2));
  return removed[0];
};

const updateBouquet = async (id, data) => {
  const bouquets = await listBouquets();
  const index = bouquets.findIndex((b) => b.id === id);
  if (index === -1) return null;
  bouquets[index] = { ...bouquets[index], ...data };
  await fs.writeFile(bouquetsPath, JSON.stringify(bouquets, null, 2));
  return bouquets[index];
};

const updatePhoto = async (id, photoURL) => {
  return await updateBouquet(id, { photoURL });
};

module.exports = {
  listBouquets,
  getBouquetById,
  addBouquet,
  removeBouquets,
  updateBouquet,
  updatePhoto,
};