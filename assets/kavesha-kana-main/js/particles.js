function createParticleBackground() {
  const existingContainer = document.querySelector('.particles-container');
  const particlesContainer = existingContainer || document.createElement('div');

  if (!existingContainer) {
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
  }

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: var(--accent-color-primary);
      border-radius: 50%;
      animation: floatParticle 20s infinite linear;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      opacity: ${Math.random() * 0.3};
      animation-delay: ${Math.random() * 20}s;
    `;
    particlesContainer.appendChild(particle);
  }

  if (!document.querySelector('style[data-particles]')) {
    const styleElement = document.createElement('style');
    styleElement.setAttribute('data-particles', 'true');
    styleElement.textContent = `
      @keyframes floatParticle {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(-100vh) rotate(360deg); }
      }
    `;
    document.head.appendChild(styleElement);
  }
}

createParticleBackground();
