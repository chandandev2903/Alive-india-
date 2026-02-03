
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".reel",
        start: "top top",
        end: "+=4000",
        scrub: 1,
        pin: true
      }
    });

    /* 1. OPEN EYE: Lid lifts and flattens */
    /* 1. OPEN EYE: Lid lifts and Background changes to Black */
    tl.to("#eyelidTop", {
      yPercent: -110,
      borderRadius: "0 0 50% 50% / 0 0 10% 10%",
      ease: "power2.inOut"
    }, 0);

    // Add this line to change the body background to black as the eye opens
    tl.to(".stage", {
      background: "#000",
      duration: 1,
      ease: "power2.inOut"
    }, 0);

    /* 2. IRIS ENLARGES: Becomes the background */
    tl.to("#iris", {
      scale: 15,
      duration: 2,
      ease: "power2.in"
    }, 0.5);

    /* 3. PUPIL TO 'A': Pupil morphs into the white 'A' */
    tl.to("#pupil", {
      backgroundColor: "transparent",
      duration: 0.5
    }, 1);

    tl.to("#pupilLetter", {
      opacity: 1,
      scale: 1,
      duration: 1
    }, 1.2);

    /* 4. ZOOM THROUGH 'A' */
    tl.to("#eyeContainer", {
      scale: 15,
      opacity: 0,
      duration: 1.5,
      ease: "power3.in"
    }, 2);


    /* 5. FINAL BRAND REVEAL */
    tl.to(".stage", {
      /* Transition to a deep red/black gradient for the final logo */
      background: "linear-gradient(135deg, #800000, #000)",
      duration: 1
    }, 2.5);

    tl.to("#brand", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, 3);

    // ThreeJS Background (Subtle Wireframe)
    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    // const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('eye3d'), alpha: true });
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // const geo = new THREE.SphereGeometry(5, 32, 32);
    // const mat = new THREE.MeshBasicMaterial({ color: 0xff1f3c, wireframe: true, transparent: true, opacity: 0.1 });
    // const sphere = new THREE.Mesh(geo, mat);
    // scene.add(sphere);
    // camera.position.z = 10;
    // function animate() {
    //   requestAnimationFrame(animate);
    //   sphere.rotation.y += 0.005;
    //   renderer.render(scene, camera);
    // }
    // animate();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('eye3d'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create the main globe
    const globeGeo = new THREE.SphereGeometry(5, 32, 32);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0xff1f3c,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    // Create multiple wrapping wires for a more complex effect
    function createWrappingWires() {
      const wires = [];
      const wireCount = 3; // Number of wires
      const colors = [0x00ff88, 0x0088ff, 0xff8800]; // Different wire colors

      for (let w = 0; w < wireCount; w++) {
        const points = [];
        const radius = 5.5; // Slightly larger than globe
        const segments = 150;
        const wireOffset = w * Math.PI * 2 / wireCount; // Offset each wire

        // Create a 3D helix/spiral
        for (let i = 0; i <= segments; i++) {
          const t = i / segments * Math.PI * 6; // Multiple wraps
          const phase = wireOffset + t;

          // Parametric equation for a helix
          const x = radius * Math.cos(phase);
          const y = radius * Math.sin(t * 0.5);
          const z = radius * Math.sin(phase);

          points.push(new THREE.Vector3(x, y, z));
        }

        // Create the curve
        const curve = new THREE.CatmullRomCurve3(points);

        // Create tube geometry for the wire
        const tubeGeometry = new THREE.TubeGeometry(
          curve,
          segments * 2,
          0.08, // Wire thickness
          12,   // Radial segments
          false
        );

        const wireMaterial = new THREE.MeshBasicMaterial({
          color: colors[w],
          transparent: true,
          opacity: 0.7
        });

        const wire = new THREE.Mesh(tubeGeometry, wireMaterial);
        scene.add(wire);
        wires.push(wire);
      }

      return wires;
    }

    // Create a flowing particle effect along the wires
    function createWireParticles() {
      const particles = [];
      const particleCount = 50;
      const particleGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
      });

      for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);

        // Store particle animation data
        particle.userData = {
          speed: 0.001 + Math.random() * 0.002,
          offset: Math.random() * Math.PI * 2,
          radius: 5.5 + Math.random() * 0.5,
          heightOffset: Math.random() * 2 - 1
        };

        scene.add(particle);
        particles.push(particle);
      }

      return particles;
    }

    // Camera position
    camera.position.z = 12;
    camera.position.y = 4;

    // Create wires and particles
    const wires = createWrappingWires();
    const particles = createWireParticles();

    // Animation function
    function animate() {
      requestAnimationFrame(animate);

      // Rotate the globe
      globe.rotation.y += 0.004;
      globe.rotation.x += 0.001;

      // Animate particles along helical paths
      const time = Date.now() * 0.001;

      particles.forEach((particle, index) => {
        const data = particle.userData;

        // Calculate position on a helix
        const angle = time * data.speed * 10 + data.offset;
        const height = Math.sin(time * data.speed * 5 + data.offset) * 3;

        particle.position.x = Math.cos(angle) * data.radius;
        particle.position.y = height + data.heightOffset;
        particle.position.z = Math.sin(angle) * data.radius;

        // Make particles glow slightly
        const pulse = Math.sin(time * 2 + index) * 0.3 + 0.7;
        particle.material.opacity = pulse * 0.8;
      });

      // Rotate the wires slightly
      wires.forEach((wire, index) => {
        wire.rotation.y += 0.001 * (index + 1);
      });

      // Gentle camera movement
      const cameraTime = Date.now() * 0.0003;
      camera.position.x = Math.sin(cameraTime) * 2;
      camera.position.y = 4 + Math.cos(cameraTime * 0.7) * 0.5;
      camera.lookAt(0, 0, 0);

      // Make wires pulse slightly
      const pulseValue = Math.sin(time) * 0.1 + 0.7;
      wires.forEach(wire => {
        wire.material.opacity = pulseValue * 0.7;
      });

      renderer.render(scene, camera);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Add lighting for depth
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // Add starfield background
    function createStarfield() {
      const starGeometry = new THREE.BufferGeometry();
      const starCount = 1000;
      const positions = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 50;
        positions[i + 1] = (Math.random() - 0.5) * 50;
        positions[i + 2] = (Math.random() - 0.5) * 50;
      }

      starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.05,
        transparent: true,
        opacity: 0.8
      });

      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);

      return stars;
    }

    const stars = createStarfield();

    // Animate stars
    function animateStars() {
      stars.rotation.y += 0.0001;
    }

    // Start animation
    animate();

    // Add star animation to main loop
    function fullAnimate() {
      requestAnimationFrame(fullAnimate);
      animateStars();
      // Your existing animate function is already running
    }
