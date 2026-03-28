function updateActiveNavigation() {
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navigation-links a').forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateActiveNavigation();
});
