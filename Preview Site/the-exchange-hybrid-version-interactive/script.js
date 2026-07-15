const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}


// Subtle cursor-responsive parallax for the hero network graphic.
const networkVisual = document.querySelector('.network-visual');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (networkVisual && !reduceMotion.matches) {
  networkVisual.addEventListener('pointermove', (event) => {
    const bounds = networkVisual.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    networkVisual.style.setProperty('--mouse-x', x.toFixed(3));
    networkVisual.style.setProperty('--mouse-y', y.toFixed(3));
  });

  networkVisual.addEventListener('pointerleave', () => {
    networkVisual.style.setProperty('--mouse-x', '0');
    networkVisual.style.setProperty('--mouse-y', '0');
  });
}
