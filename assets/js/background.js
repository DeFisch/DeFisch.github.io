const particleContainer = document.getElementById('particle-container');
let maxParticles = 50; // Limit the total number of particles
let currentParticles = 0; // Track the current number of particles

function generateParticles() {
  if (currentParticles >= maxParticles) return; // Stop adding more particles

  for (let i = 0; i < 20; i++) {
    if (currentParticles >= maxParticles) break; // Respect the maximum limit

    const particle = document.createElement('div');
    particle.className = 'particle';

    // Randomize initial position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    // Randomize size
    const size = Math.random() * 5 + 2; // Range: 2px to 7px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Randomize color (yellow to orange to red)
    const colors = ['#FFD700', '#FFA500', '#FF4500'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    // Randomize animation duration and delay
    const duration = Math.random() * 3 + 3; // Range: 3s to 6s
    const delay = Math.random() * 5; // Range: 0s to 5s
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    // Set initial position
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Append particle to container
    particleContainer.appendChild(particle);
    currentParticles++; // Increment the particle count

    // Remove particle after animation ends
    particle.addEventListener('animationend', () => {
      particleContainer.removeChild(particle);
      currentParticles--; // Decrement the particle count
    });
  }
}

function cleanupParticles() {
  const particles = particleContainer.querySelectorAll('.particle');
  const excess = particles.length - maxParticles;

  if (excess > 0) {
    for (let i = 0; i < excess; i++) {
      particleContainer.removeChild(particles[i]); // Remove oldest particles
    }
  }
}

// Call cleanup periodically
setInterval(cleanupParticles, 2000); // Run cleanup every 2 seconds


// Generate particles periodically
setInterval(generateParticles, 1000); // Generate particles every second
