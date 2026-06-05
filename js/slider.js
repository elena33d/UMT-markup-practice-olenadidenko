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
      item.addEventListener("click", () => {
        const img = item.querySelector("img").src;
        const title = item.querySelector("h3").textContent;

        const priceElement =
          item.querySelector(".bouquets-price") ||
          item.querySelector(".bestsellers-price");

        const descElement =
          item.querySelector(".bouquets-desc") ||
          item.querySelector(".bestsellers-desc");

        modalProductImg.src = img;
        modalProductTitle.textContent = title;
        modalProductPrice.textContent = priceElement ? priceElement.textContent : "";
        modalProductDesc.textContent = descElement ? descElement.textContent : "";

        productModal.classList.add("is-open");
      });
    });

    closeProductModal.addEventListener("click", () => {
      productModal.classList.remove("is-open");
    });

    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) {
        productModal.classList.remove("is-open");
      }
    });

    buyNowBtn.addEventListener("click", () => {
      productModal.classList.remove("is-open");
      orderModal.classList.add("is-open");
    });

    closeOrderModal.addEventListener("click", () => {
      orderModal.classList.remove("is-open");
    });

    orderModal.addEventListener("click", (e) => {
      if (e.target === orderModal) {
        orderModal.classList.remove("is-open");
      }
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const list = slider.querySelector(".slider-list");
    const items = slider.querySelectorAll(".slider-item");

    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    if (!list || items.length === 0 || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function getItemsPerView() {
      if (window.innerWidth < 768) return 1;    
      if (window.innerWidth < 1440) return 2;    
      return 3;                                   
    }

          function updateSlider() {
          const itemsPerView = getItemsPerView();
        
          const gap = parseInt(getComputedStyle(list).gap) || 0;
        
          const sliderWidth = slider.offsetWidth;
        
          const itemWidth =
            (sliderWidth - gap * (itemsPerView - 1)) / itemsPerView;
        
          items.forEach((item) => {
            item.style.flex = `0 0 ${itemWidth}px`;
            item.style.width = `${itemWidth}px`;
          });
        
          list.style.transform =
            `translateX(-${currentIndex * (itemWidth + gap)}px)`;
        }

      
    nextBtn.addEventListener("click", () => {
      const itemsPerView = getItemsPerView();

      if (currentIndex < items.length - itemsPerView) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }

      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      const itemsPerView = getItemsPerView();

      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = items.length - itemsPerView;
      }

      updateSlider();
    });

    window.addEventListener("resize", () => {
      currentIndex = 0;
      updateSlider();
    });

    updateSlider();
  });
});
