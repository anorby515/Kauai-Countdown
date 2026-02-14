// March 11, 2026 1:10 PM HST (UTC-10) = March 11, 2026 23:10 UTC
const TARGET_DATE = new Date('2026-03-11T23:10:00Z');

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownEl = document.getElementById('countdown');

function pad(num, size) {
  return String(num).padStart(size, '0');
}

function updateCountdown() {
  const now = new Date();
  const diff = TARGET_DATE - now;

  if (diff <= 0) {
    daysEl.textContent = '0';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    countdownEl.classList.add('arrived');
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = String(days);
  hoursEl.textContent = pad(hours, 2);
  minutesEl.textContent = pad(minutes, 2);
  secondsEl.textContent = pad(seconds, 2);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
