// "Coming soon" pop-up for any link or button marked with data-soon="Name".
const modal = document.getElementById('soon');
const what = document.getElementById('soon-what');
let lastFocus;

function openSoon(name) {
  lastFocus = document.activeElement;
  what.textContent = name || 'This page';
  modal.hidden = false;
  document.getElementById('soon-close').focus();
}
function closeSoon() {
  modal.hidden = true;
  if (lastFocus) lastFocus.focus();
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-soon]');
  if (t) { e.preventDefault(); openSoon(t.dataset.soon); }
  else if (e.target === modal || e.target.id === 'soon-close') closeSoon();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeSoon(); });
