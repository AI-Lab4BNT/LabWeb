// ============= 3D ROTATING BRAIN ANIMATION ============= 

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('brainCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.querySelector('.hero').offsetHeight;

    let particles = [];
    let rotation = 0;

    // Particle class for 3D brain visualization
    class Particle {
        constructor(x, y, z, color) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.color = color;
            this.size = 2;
        }

        rotate(angleX, angleY) {
            const cosY = Math.cos(angleY);
            const sinY = Math.sin(angleY);
            const cosX = Math.cos(angleX);
            const sinX = Math.sin(angleX);

            let x = this.x;
            let y = this.y;
            let z = this.z;

            // Rotate around Y axis
            let xNew = x * cosY - z * sinY;
            let zNew = x * sinY + z * cosY;
            x = xNew;
            z = zNew;

            // Rotate around X axis
            let yNew = y * cosX - z * sinX;
            zNew = y * sinX + z * cosX;
            y = yNew;
            z = zNew;

            this.x = x;
            this.y = y;
            this.z = z;
        }

        project() {
            const scale = 200 / (10 + this.z);
            const x2d = this.x * scale + canvas.width / 2;
            const y2d = this.y * scale + canvas.height / 2;
            return { x: x2d, y: y2d, scale };
        }
    }

    // Initialize brain particles
    function initParticles() {
        particles = [];
        const colors = ['#ff6b9d', '#ffa502', '#7b68ee', '#00d4ff', '#ff1493', '#00ff00'];
        
        // Create a sphere of particles to represent brain
        for (let i = 0; i < 200; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const r = 3 + Math.random() * 1.5;

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            particles.push(new Particle(x, y, z, colors[Math.floor(Math.random() * colors.length)]));
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(15, 23, 42, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        rotation += 0.005;

        particles.forEach(particle => {
            particle.rotate(0.002, rotation);
            const proj = particle.project();

            ctx.fillStyle = particle.color;
            ctx.globalAlpha = Math.max(0.3, (particle.z + 10) / 20);
            ctx.beginPath();
            ctx.arc(proj.x, proj.y, particle.size * proj.scale / 200, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            canvas.height = heroSection.offsetHeight;
        }
    });

    // Start animation
    initParticles();
    animate();
});
