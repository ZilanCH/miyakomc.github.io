// Funktion zum Rendern der Profildaten
function renderProfile() {
    // Header
    document.getElementById('profileImg').src = profileData.profileImage;
    document.getElementById('profileName').textContent = profileData.name;
    document.getElementById('profileSubtitle').textContent = profileData.subtitle;
    
    // Über mich
    document.getElementById('aboutText').textContent = profileData.about;
    
    // Skills
    const skillsContainer = document.getElementById('skillsContainer');
    profileData.skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-item';
        skillDiv.textContent = skill;
        skillsContainer.appendChild(skillDiv);
    });
    
    // Erfahrung
    const experienceContainer = document.getElementById('experienceContainer');
    profileData.experience.forEach((exp, index) => {
        const expDiv = document.createElement('div');
        expDiv.className = 'experience-item';
        expDiv.innerHTML = `
            <p class="about-text">
                <strong>${exp.position}</strong> - ${exp.company} (${exp.period})<br>
                ${exp.description}
            </p>
        `;
        experienceContainer.appendChild(expDiv);
        
        if (index < profileData.experience.length - 1) {
            experienceContainer.appendChild(document.createElement('br'));
        }
    });
    
    // Kontakt
    const contactContainer = document.getElementById('contactContainer');
    profileData.contact.forEach(contact => {
        const contactDiv = document.createElement('div');
        contactDiv.className = 'contact-item';
        contactDiv.innerHTML = `
            <strong>${contact.label}</strong>
            ${contact.value}
        `;
        contactContainer.appendChild(contactDiv);
    });
}

// Profil beim Laden der Seite rendern
document.addEventListener('DOMContentLoaded', renderProfile);
