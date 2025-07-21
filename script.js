document.addEventListener('DOMContentLoaded', function() {
    // Dynamisches Update des Jahres im Footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Sanftes Scrollen zu den Ankerpunkten
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Berechnet den Offset für den Sticky Header
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Optional: Schließe das mobile Menü, wenn es geöffnet ist
                const navUl = document.querySelector('nav ul');
                if (navUl && navUl.classList.contains('active')) {
                    navUl.classList.remove('active');
                }
            }
        });
    });

    // Optional: Mobile Navigation (Hamburger-Menü) - Wenn du das CSS für .menu-icon aktivierst
    // Füge ein Element mit der Klasse "menu-icon" in dein HTML ein (z.B. im Header)
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    if (menuIcon && navUl) {
        menuIcon.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }

    // Optional: Animation beim Scrollen (Beispiel für eine einfache Fade-In-Animation)
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Wenn 10% der Sektion sichtbar sind
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                observer.unobserve(entry.target); // Stoppt die Beobachtung nach dem ersten Erscheinen
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // Starte alle Sektionen unsichtbar und leicht nach unten verschoben, außer die Hero-Sektion
        if (section.id !== 'hero') {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
            observer.observe(section);
        }
    });

    // Spezielle Animation für Hero Section (bereits im CSS definiert)
    // Wenn du JavaScript-basierte Hero-Animationen möchtest, kannst du sie hier hinzufügen.
});
