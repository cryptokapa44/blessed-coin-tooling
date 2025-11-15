// site.js – Blessed Coin minimal script
console.log("Blessed Coin site script loaded");

// Scroll-fade animations via IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      console.log("Observed:", entry.target.id, "isIntersecting:", entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-5');
        obs.unobserve(entry.target);
        console.log("Revealed section:", entry.target.id);
      }
    });
  }, {
    threshold: 0.1,          // Trigger a bit earlier
    rootMargin: '0px 0px -10% 0px'  // Slight bottom margin to trigger before fully visible
  });

  document.querySelectorAll('.fade-in-section').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-5');
    el.style.transitionProperty = 'opacity, transform';  // ensure both animate
    el.style.transitionDuration = '0.7s';
    el.style.transitionTimingFunction = 'ease-out';
    console.log("Preparing section for reveal:", el.id);
    observer.observe(el);
  });
});



