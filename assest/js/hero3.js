
  const universeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".universe-reel",
    start: "top top",
    end: "+=3000",
    scrub: 1,
    pin: true
  }
});

// FOLD 2: Text moves to Right, Solar System emerges from Bottom
universeTl.to("#universeContent", { 
  x: "150%", 
  opacity: 0.3, 
  duration: 2 
})
.to("#solarSystem", { 
  bottom: "10%", 
  duration: 2 
}, "<") // Starts at same time as text move

// FOLD 3: Aurora moves, Central Star turns "Alive", Planets enlarge
universeTl.to(".orbit-ring", { 
  scale: 1, 
  opacity: 1, 
  stagger: 0.5, 
  duration: 1.5 
})
.to(".planet", { 
  scale: 1.8, 
  backgroundColor: "#ff1f3c", 
  boxShadow: "0 0 25px #ff1f3c",
  duration: 1 
})
.to("#solarSystem", {
  rotation: 360,
  duration: 10,
  ease: "none"
});
