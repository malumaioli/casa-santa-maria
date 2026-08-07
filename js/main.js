const header = document.querySelector('.site-header');
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
  const currentY = window.scrollY;
  if (currentY > lastScrollY && currentY > header.offsetHeight) {
    header.classList.add('site-header--hidden');
  } else {
    header.classList.remove('site-header--hidden');
  }
  lastScrollY = currentY;
  ticking = false;
}

if (header) {
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
}
