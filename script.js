// Navbar scroll effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("navbar");
  if (window.scrollY > 50) {
    header.classList.add("nav-scrolled");
  } else {
    header.classList.remove("nav-scrolled");
  }
});

// Fade‑in on scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".section-inner, .card, .proj-card, .pub-card, .timeline-item, .c-card, .hero-img-wrap, .hero-text"
  );
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("fade-in");
      obs.unobserve(entry.target);
    });
  }, observerOptions);

  elements.forEach((el) => {
    el.classList.add("fade-init");
    observer.observe(el);
  });
});
