const showMoreBtn = document.querySelector(".bouquets-button");
let currentPage = 1;
const PER_PAGE = 4;

async function init() {
  try {
    const bestsellers = await fetchBestsellers();
    renderBestsellers(bestsellers);

    const result = await fetchBouquets(currentPage);
    renderBouquets(result.data);

    if (result.total <= PER_PAGE) {
      showMoreBtn.style.display = "none";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

showMoreBtn.addEventListener("click", async () => {
  currentPage += 1;
  try {
    const result = await fetchBouquets(currentPage);
    appendBouquets(result.data);

    if (currentPage * PER_PAGE >= result.total) {
      showMoreBtn.style.display = "none";
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

init();