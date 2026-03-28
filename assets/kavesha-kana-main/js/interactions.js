document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function (event) {
      const ripple = document.createElement('span');
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;

      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${event.clientX - this.getBoundingClientRect().left - radius}px`;
      ripple.style.top = `${event.clientY - this.getBoundingClientRect().top - radius}px`;
      ripple.classList.add('ripple-effect');

      const existingRipple = this.querySelector('.ripple-effect');
      if (existingRipple) {
        existingRipple.remove();
      }

      this.appendChild(ripple);
    });
  });
});

if (!document.querySelector('style[data-ripple]')) {
  const rippleStyles = document.createElement('style');
  rippleStyles.setAttribute('data-ripple', 'true');
  rippleStyles.textContent = `
    .ripple-effect {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.7);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(rippleStyles);
}
