(function() {
    gsap.registerPlugin(ScrollTrigger);

    const labelContainer = document.getElementById('labelContainer');
    const planets = document.querySelectorAll('.planet');
    const labelElements = [];

    planets.forEach((planet, index) => {
      const label = document.createElement('div');
      label.className = 'planet-label';
      label.innerHTML = planet.dataset.label.replace(' ', '<br>');
      labelContainer.appendChild(label);
      labelElements.push({ planet, label });
    });

    function updateLabels() {
      labelElements.forEach(({ planet, label }) => {
        const rect = planet.getBoundingClientRect();
        // Updated to use client coordinates for fixed-like labels
        label.style.left = (rect.left + rect.width / 2) + 'px';
        label.style.top = (rect.top + rect.height / 2 + 30) + 'px';
        label.style.transform = 'translateX(-50%)';
      });
    }

    gsap.ticker.add(updateLabels);

    const universeTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".universe-reel",
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
        pinSpacing: true // Ensures the next section waits for this to finish
      }
    });

    // ... (rest of your timeline steps stay the same)
    universeTl.to("#universeContent", { x: "200%", opacity: 0.3, duration: 2 })
    .to("#solarSystem", { bottom: "15%", left: "35%", duration: 2.5, ease: "power2.out" }, "<")
    .to("#orbit1", { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.2)" })
    .to("#orbit2", { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.2)" }, "-=0.5")
    .to("#orbit3", { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.2)" }, "-=0.5")
    .to(".central-star", {
      boxShadow: "0 0 150px #ff1f3c, inset 0 0 50px #ff1f3c",
      duration: 1,
      onComplete: () => { document.querySelector('.central-star').classList.add('show-badge'); }
    }, "-=0.5")
    .to(".planet", { scale: 1.3, duration: 1.5, stagger: 0.15, 
      onComplete: () => { labelElements.forEach(({ label }) => label.classList.add('show')); }
    })
    .to("#solarSystem", { rotation: 15, duration: 4, ease: "none" });

    // Independent infinite rotations
    gsap.to("#orbit1", { rotation: 360, duration: 40, repeat: -1, ease: "none" });
    gsap.to("#orbit2", { rotation: -360, duration: 60, repeat: -1, ease: "none" });
    gsap.to("#orbit3", { rotation: 360, duration: 80, repeat: -1, ease: "none" });
})();