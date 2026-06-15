export function renderBestsellers(items) {
  const list = document.querySelector(".bestsellers-list");
  list.innerHTML = "";
  items.forEach((item) => {
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="bestsellers-item slider-item">
        <img
          class="bestsellers-image"
          src="${item.image}"
          srcset="${item.image} 1x, ${item.image2x} 2x"
          alt="${item.alt}"
        />
        <h3 class="bestsellers-name">${item.name}</h3>
        <p class="bestsellers-desc">${item.desc}</p>
        <p class="bestsellers-price">${item.price}</p>
      </li>`
    );
  });
}

export function renderBouquets(items) {
  const list = document.querySelector(".bouquets-list");
  list.innerHTML = "";
  items.forEach((item) => {
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="bouquets-item">
        <img
          class="bouquets-image"
          src="${item.image}"
          srcset="${item.image} 1x, ${item.image2x} 2x"
          alt="${item.alt}"
        />
        <h3 class="bouquets-name">${item.name}</h3>
        <p class="bouquets-desc">${item.desc}</p>
        <p class="bouquets-price">${item.price}</p>
      </li>`
    );
  });
}