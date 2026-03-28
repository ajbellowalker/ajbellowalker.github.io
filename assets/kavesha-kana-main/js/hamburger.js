const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationLinks = document.querySelector('.navigation-links');

if (hamburgerMenu && navigationLinks) {
  hamburgerMenu.addEventListener('click', () => {
    navigationLinks.classList.toggle('show');
    hamburgerMenu.classList.toggle('open');
  });

  document.querySelectorAll('.navigation-links a').forEach(link => {
    link.addEventListener('click', () => {
      navigationLinks.classList.remove('show');
      hamburgerMenu.classList.remove('open');
    });
  });
}
