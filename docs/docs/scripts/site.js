// site.js – Blessed Coin live stats script
const MORALIS_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImUxN2JjZmIzLTRjMjctNDUxMy04YTY4LTg1NDMwNjRjNWIyZSIsIm9yZ0lkIjoiNDc5NTUxIiwidXNlcklkIjoiNDkzMzU5IiwidHlwZUlkIjoiOTc4OGI4MTAtMmU0YS00MmU3LWI2OTAtNjNkZTE0M2QzODNkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NjIyOTEwNDMsImV4cCI6NDkxODA1MTA0M30.cDiBBTnUu5zqJHtvVMZKQjqEbr86mbjIJmdc-gEQlI4";      // ← Insert your actual key
const TOKEN_ADDRESS   = "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump"; // ← Insert your actual SPL token address
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
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Moralis token holder data:", data);
    const totalHolders = data.totalHolders || "N/A";
    if (holdersEl) {
      holdersEl.textContent = totalHolders;
    }
  })
  .catch(error => {
    console.error("Error fetching token stats:", error);
    if (holdersEl) {
      holdersEl.textContent = "Error";
    }
  });
});
