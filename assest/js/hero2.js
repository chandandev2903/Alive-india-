
    // Function to wrap letters in spans for interactivity
const pTag = document.getElementById('interactiveText');
const text = pTag.textContent.trim();
pTag.innerHTML = text.split('').map(char => 
  `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`
).join('');

// Add this to your main GSAP timeline (tl) at the very end
tl.from(".char", {
  opacity: 0,
  y: 20,
  stagger: 0.02, // Creates a typing/wave effect
  duration: 0.8,
  ease: "back.out(1.7)"
}, 3.5); // Starts just after the main ALIVE INDIA text appears
