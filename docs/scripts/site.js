// site.js – Blessed Coin minimal script
console.log("Blessed Coin site script loaded");

// IIFE to fetch token metrics and update the DOM
(async function fetchTokenMetrics() {
  const contract = "EHvGhUxaXZaUsKzLNk8mv8eLrMPiBBij5RvxNV8pump";  // Mint address (public)
  const apiUrl = `https://blessed-worker.trenchwarrior4.workers.dev/api?contract=${contract}`;
  try {
    const resp = await fetch(apiUrl, { method: 'GET', mode: 'cors' });
    if (!resp.ok) throw new Error(`Network response was not OK (${resp.status})`);
    const data = await resp.json();

    // Update each element with the returned data (or 'N/A' if missing)
    document.getElementById('market-cap').textContent   = data.marketCap   ?? 'N/A';
    document.getElementById('volume-24h').textContent  = data.volume24h   ?? 'N/A';
    document.getElementById('total-supply').textContent= data.totalSupply ?? 'N/A';
  } catch (err) {
    console.error('Error fetching token metrics:', err);
    // On error, set fallback text so "Loading…" is replaced
    document.getElementById('market-cap').textContent   = 'N/A';
    document.getElementById('volume-24h').textContent   = 'N/A';
    document.getElementById('total-supply').textContent = 'N/A';
  }
})();
