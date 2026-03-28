const typedTextElement = document.getElementById('typed-text-element');
const typingPhrases = [
  "Cybersecurity Graduate with a Hacker's Curiosity",
  'Making Sense of Data',
  'AI & ML Explorer',
  'Code Crafter',
  'Security Researcher'
];

if (typedTextElement) {
  let phraseIndex = 0;
  let characterIndex = 0;
  let isDeleting = false;
  const pauseDuration = 1200;

  function typeTextLoop() {
    const currentPhrase = typingPhrases[phraseIndex];

    if (!isDeleting) {
      typedTextElement.textContent = currentPhrase.slice(0, ++characterIndex);
      if (characterIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeTextLoop, pauseDuration);
        return;
      }
    } else {
      typedTextElement.textContent = currentPhrase.slice(0, --characterIndex);
      if (characterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
      }
    }
    setTimeout(typeTextLoop, isDeleting ? 45 : 75);
  }

  setTimeout(typeTextLoop, 1000);
}
