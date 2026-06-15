import { fetchBestsellers, fetchBouquets } from "./api.js";
import { renderBestsellers, renderBouquets } from "./render.js";

async function init() {
  try {
    const bestsellers = await fetchBestsellers();
    renderBestsellers(bestsellers);

    const bouquets = await fetchBouquets();
    renderBouquets(bouquets);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

init();