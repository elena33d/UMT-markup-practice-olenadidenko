import axios from "axios";

const BASE_URL = "https://verbose-guide-x5v4v66v4x95hvqpv-3001.app.github.dev";

export async function fetchBestsellers() {
  const response = await axios.get(`${BASE_URL}/bestsellers`);
  return response.data;
}

export async function fetchBouquets() {
  const response = await axios.get(`${BASE_URL}/bouquets`);
  return response.data;
}