    const canvas = document.getElementById('auroraCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const waves = [];
    for (let i = 0; i < 3; i++) {
      waves.push({
        y: Math.random() * canvas.height,
        length: 0.01 + Math.random() * 0.01,
        amplitude: 100 + Math.random() * 100,
        frequency: 0.01 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2
      });
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);
        
        for (let x = 0; x < canvas.width; x++) {
          const y = wave.y + Math.sin(x * wave.length + wave.phase) * wave.amplitude;
          ctx.lineTo(x, y);
        }
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, `rgba(138, 43, 226, ${0.3 - index * 0.1})`);
        gradient.addColorStop(0.5, `rgba(0, 191, 255, ${0.3 - index * 0.1})`);
        gradient.addColorStop(1, `rgba(255, 31, 60, ${0.3 - index * 0.1})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.stroke();
        
        wave.phase += wave.frequency;
      });

      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
