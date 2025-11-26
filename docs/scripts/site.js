// site.js – Blessed Coin minimal script
console.log("Blessed Coin site script loaded");

// Format numbers to K/M/B notation
function formatNumber(value) {
  if (value === null || value === undefined || isNaN(value)) return "N/A";
  const num = Number(value);
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num.toFixed(2); // show 2 decimal places for small values
}

// IIFE to fetch token metrics and update the DOM
(async function fetchTokenMetrics() {
  const contract = "EHvGhUxaXZaUsKzLNk8mv8eLrMPiBBij5RvxNV8pump";  // Mint address (public)
  const apiUrl = `https://blessed-worker.trenchwarrior4.workers.dev/api?contract=${contract}`;
  try {
    const resp = await fetch(apiUrl, { method: 'GET', mode: 'cors' });
    if (!resp.ok) throw new Error(`Network response was not OK (${resp.status})`);
    const data = await resp.json();

    // Update DOM with formatted values
    document.getElementById('market-cap').textContent    = formatNumber(data.marketCap);
    document.getElementById('volume-24h').textContent    = formatNumber(data.volume24h);
    document.getElementById('total-supply').textContent  = formatNumber(data.totalSupply);
  } catch (err) {
    console.error('Error fetching token metrics:', err);
    // On error, set fallback text so "Loading…" is replaced
    document.getElementById('market-cap').textContent    = 'N/A';
    document.getElementById('volume-24h').textContent    = 'N/A';
    document.getElementById('total-supply').textContent  = 'N/A';
  }
})();
