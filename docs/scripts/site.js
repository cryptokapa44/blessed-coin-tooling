// site.js – Blessed Coin minimal script
console.log("Blessed Coin site script loaded");

// Helper function to format large numbers (e.g. 17.3K, 2.5M)
function formatNumber(num) {
  if (typeof num !== "number") num = Number(num);
  if (isNaN(num)) return "N/A";
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num.toString();
}

// IIFE to fetch token metrics and update the DOM
(async function fetchTokenMetrics() {
  const contract = "EHvGhUxaXZaUsKzLNk8mv8eLrMPiBBij5RvxNV8pump";  // Mint address (public)
  const apiUrl = `https://blessed-worker.trenchwarrior4.workers.dev/api?contract=${contract}`;
  try {
    const resp = await fetch(apiUrl, { method: 'GET', mode: 'cors' });
    if (!resp.ok) throw new Error(`Network response was not OK (${resp.status})`);
    const data = await resp.json();

    // Format and update DOM
    document.getElementById('market-cap').textContent    = data.marketCap   ? formatNumber(data.marketCap)   : 'N/A';
    document.getElementById('volume-24h').textContent     = data.volume24h   ? formatNumber(data.volume24h)   : 'N/A';
    document.getElementById('total-supply').textContent   = data.totalSupply ? formatNumber(data.totalSupply) : 'N/A';
  } catch (err) {
    console.error('Error fetching token metrics:', err);
    document.getElementById('market-cap').textContent    = 'N/A';
    document.getElementById('volume-24h').textContent    = 'N/A';
    document.getElementById('total-supply').textContent  = 'N/A';
  }
})();

