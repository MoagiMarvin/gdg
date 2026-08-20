const drawer = document.getElementById('drawer');
const backdrop = document.getElementById('backdrop');
const searchPanel = document.getElementById('searchPanel');
const searchInput = document.getElementById('searchInput');

function setDrawer(open) {
  drawer.classList.toggle('open', open);
  backdrop.classList.toggle('show', open);
  drawer.setAttribute('aria-hidden', String(!open));
}

document.getElementById('menuOpen').addEventListener('click', () => setDrawer(true));
document.getElementById('drawerClose').addEventListener('click', () => setDrawer(false));
backdrop.addEventListener('click', () => setDrawer(false));

document.getElementById('searchOpen').addEventListener('click', () => {
  searchPanel.classList.add('open');
  searchInput.focus();
});
document.getElementById('searchClose').addEventListener('click', () => searchPanel.classList.remove('open'));
document.getElementById('cartOpen').addEventListener('click', () => {
  window.alert('Your cart is empty.');
});

document.querySelectorAll('.drawer a').forEach((link) => link.addEventListener('click', () => setDrawer(false)));
document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('formMessage').textContent = 'Thanks, your message has been received.';
  event.currentTarget.reset();
});
