// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close mobile nav after clicking a link
nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Hero play button — swap in your real video/link here
const playBtn = document.querySelector('.play-btn');
playBtn?.addEventListener('click', () => {
  window.open('https://www.youtube.com', '_blank', 'noopener');
});

// Contact form — placeholder handling (no backend yet)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = "Thanks — we'll get back to you within 48 hours.";
  form.reset();
});
