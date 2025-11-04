// site.js – Blessed Coin live stats script
const MORALIS_API_KEY = "MY API KEY ";      // ← Replace with your actual key
const TOKEN_ADDRESS   = "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump"; // ← Replace with the actual SPL token address on Solana
const NETWORK         = "mainnet";                // Use "mainnet" for Solana production

document.addEventListener("DOMContentLoaded", () => {
  const contractEl = document.getElementById("stat-contract");
  const holdersEl  = document.getElementById("stat-holders");

  if (contractEl) {
    contractEl.textContent = TOKEN_ADDRESS;
  }

  const url = `https://solana-gateway.moralis.io/token/${NETWORK}/holders/${TOKEN_ADDRESS}`;

  fetch(url, {
    method: "GET",
    headers: {
      "accept":   "application/json",
      "X-API-Key": MORALIS_API_KEY
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("Moralis token holder data:", data);
    const totalHolders = data.totalHolders || "N/A";
    if (holdersEl) holdersEl.textContent = totalHolders;
  })
  .catch(error => {
    console.error("Error fetching token stats:", error);
    if (holdersEl) holdersEl.textContent = "Error";
  });
});

