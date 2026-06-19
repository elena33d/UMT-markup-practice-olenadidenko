const BASE_URL = "https://verbose-guide-x5v4v66v4x95hvqpv-3001.app.github.dev";

async function fetchBestsellers() {
  const response = await axios.get(`${BASE_URL}/bestsellers`);
  return response.data;
}

async function fetchBouquets(page) {
  const response = await axios.get(`${BASE_URL}/bouquets?_page=${page}&_per_page=${PER_PAGE}`);
  return {
    data: response.data.data,
    total: response.data.items,
  };
}