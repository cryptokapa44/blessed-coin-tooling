site.js : // site.js – Blessed Coin minimal script
console.log("Blessed Coin site script loaded");
// You can add interactive functionality here later.
(async function fetchTokenMetrics() {
  const contract = "EHvGhUxaXZaUsKzLNk8mv8eLrMPiBBij5RvxNV8pump";  // your mint
  try {
    const resp = await fetch(`https://blessed-worker.trenchwarrior4.workers.dev/api?contract=${contract}`);
    const data = await resp.json();

    document.getElementById('market-cap').textContent   = data.marketCap   ?? 'N/A';
    document.getElementById('volume-24h').textContent    = data.volume24h   ?? 'N/A';
    document.getElementById('total-supply').textContent  = data.totalSupply ?? 'N/A';

  } catch (err) {
    console.error('Error fetching token metrics:', err);
  }
})();
