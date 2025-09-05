// Erstelle animierte Partikel im Hintergrund
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Füge Hover-Effekte hinzu
document.querySelectorAll('.link-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Animiere Skill-Balken beim Laden der Seite
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Verwende einen einfacheren Ansatz für bessere Kompatibilität
    setTimeout(() => {
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    }, 1000);
}

// Initialisiere alle Funktionen beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateSkillBars();
});
