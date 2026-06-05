document.addEventListener("DOMContentLoaded", () => {
  const productModal = document.getElementById("productModal");
  const orderModal = document.getElementById("orderModal");
  const closeProductModal = document.getElementById("closeProductModal");
  const closeOrderModal = document.getElementById("closeOrderModal");
  const modalProductImg = document.getElementById("modalProductImg");
  const modalProductTitle = document.getElementById("modalProductTitle");
  const modalProductPrice = document.getElementById("modalProductPrice");
  const modalProductDesc = document.getElementById("modalProductDesc");
  const buyNowBtn = document.getElementById("buyNowBtn");
  const bouquets = document.querySelectorAll(".bouquets-item, .bestsellers-item");

  bouquets.forEach((item) => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      const img = item.querySelector("img")?.src;
      const title = item.querySelector("h3")?.textContent;
      const price = item.querySelector(".bouquets-price, .bestsellers-price")?.textContent;
      const desc = item.querySelector(".bouquets-desc, .bestsellers-desc")?.textContent;
      modalProductImg.src = img;
      modalProductTitle.textContent = title;
      modalProductPrice.textContent = price;
      modalProductDesc.textContent = desc;
      productModal.classList.add("is-open");
      document.documentElement.style.overflow = "hidden";
    });
  });

  closeProductModal.addEventListener("click", () => {
    productModal.classList.remove("is-open");
    document.documentElement.style.overflow = "";
  });

  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) {
      productModal.classList.remove("is-open");
      document.documentElement.style.overflow = "";
    }
  });

  buyNowBtn.addEventListener("click", () => {
    productModal.classList.remove("is-open");
    orderModal.classList.add("is-open");
    document.documentElement.style.overflow = "hidden";
  });

  closeOrderModal.addEventListener("click", () => {
    orderModal.classList.remove("is-open");
    document.documentElement.style.overflow = "";
  });

  orderModal.addEventListener("click", (e) => {
    if (e.target === orderModal) {
      orderModal.classList.remove("is-open");
      document.documentElement.style.overflow = "";
    }
  });
});
