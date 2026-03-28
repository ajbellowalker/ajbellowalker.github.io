const filterButtons = document.querySelectorAll('[data-filter]');
const projectItems = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => {
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-ghost');
    });
    button.classList.remove('btn-ghost');
    button.classList.add('btn-primary');
    const targetFilter = button.getAttribute('data-filter');

    projectItems.forEach(card => {
      if (targetFilter === 'all' || card.dataset.category === targetFilter) {
        card.style.display = 'block';
        setTimeout(() => card.style.opacity = '1', 50);
      } else {
        card.style.opacity = '0';
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  });
});
