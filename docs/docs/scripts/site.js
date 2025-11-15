// site.js – Blessed Coin minimal script
console.log("Blessed Coin site script loaded");

// Scroll-fade animations via IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-5');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.fade-in-section').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-5');
    observer.observe(el);
  });
});


