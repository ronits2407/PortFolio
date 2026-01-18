// Render Functions - Dynamically render content from portfolioData
class PortfolioRenderer {
    constructor(data) {
        this.data = data;
    }

    // Render Hero Section
    renderHero() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        const h1 = heroSection.querySelector('h1');
        const p = heroSection.querySelector('p');

        if (h1) h1.textContent = this.data.personal.name;
        if (p) p.textContent = this.data.personal.title;
    }

    // Render Education Section
    renderEducation() {
        const eduGrid = document.querySelector('.edu-grid');
        if (!eduGrid) return;

        eduGrid.innerHTML = '';

        this.data.education.forEach((edu) => {
            const card = document.createElement('div');
            card.className = 'glass-card';
            card.innerHTML = `
                <span class="year-badge">${edu.year}</span>
                <h3>${edu.degree}</h3>
                <h4>${edu.institution}</h4>
                <div class="grade">${edu.grade}</div>
                ${edu.details ? `<p style="color: var(--text-muted); margin-top: 10px; font-size: 0.9rem;">${edu.details}</p>` : ''}
            `;
            eduGrid.appendChild(card);
        });
    }

    // Render Projects Section
    renderProjects() {
        const projectsSection = document.querySelector('#projects');
        if (!projectsSection) return;

        const projectsContainer = projectsSection.querySelector('[data-projects-container]') || 
                                   projectsSection.querySelector('section > div:nth-child(2)') ||
                                   projectsSection;

        // Find or create container
        let container = projectsSection.querySelector('[data-projects-container]');
        if (!container) {
            container = document.createElement('div');
            container.setAttribute('data-projects-container', '');
            const title = projectsSection.querySelector('.section-title');
            if (title) {
                title.insertAdjacentElement('afterend', container);
            }
        }

        container.innerHTML = '';

        this.data.projects.forEach((project) => {
            const card = document.createElement('div');
            card.className = 'project-card';

            const techStack = project.technologies
                .map((tech) => `<span>${tech}</span>`)
                .join('');

            let projectLinks = '';
            if (project.github) {
                projectLinks += `<a href="${project.github}" title="GitHub" target="_blank"><i class="fab fa-github"></i></a>`;
            }
            if (project.demo) {
                projectLinks += `<a href="${project.demo}" title="Demo" target="_blank"><i class="fas fa-external-link-alt"></i></a>`;
            }

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                    <div class="year-badge">${project.date}</div>
                </div>
                <div class="tech-stack">
                    ${techStack}
                </div>
                <div class="project-links">
                    ${projectLinks}
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Render Skills Section
    renderSkills() {
        const skillsContainer = document.querySelector('.skills-container');
        if (!skillsContainer) return;

        skillsContainer.innerHTML = '';

        this.data.skills.forEach((skill) => {
            const pill = document.createElement('div');
            pill.className = 'skill-pill';
            pill.textContent = skill;
            skillsContainer.appendChild(pill);
        });
    }

    // Render Achievements Section
    renderAchievements() {
        let achievementsContainer = document.querySelector('[data-achievements]');
        
        if (!achievementsContainer) {
            // Create achievements container if it doesn't exist
            const skillsSection = document.querySelector('#skills');
            if (skillsSection) {
                achievementsContainer = document.createElement('div');
                achievementsContainer.setAttribute('data-achievements', '');
                achievementsContainer.style.marginTop = '4rem';
                skillsSection.appendChild(achievementsContainer);
            }
        }

        if (!achievementsContainer) return;

        achievementsContainer.innerHTML = `<h3 style="margin-bottom: 2rem; font-size: 1.8rem;">Achievements</h3>`;

        this.data.achievements.forEach((achievement) => {
            const item = document.createElement('div');
            item.className = 'achievement-item';
            item.innerHTML = `
                <i class="${achievement.icon} trophy-icon"></i>
                <div>
                    <h4>${achievement.title}</h4>
                    <p style="color: var(--text-muted);">${achievement.description}</p>
                </div>
            `;
            achievementsContainer.appendChild(item);
        });
    }

    // Render Contact Section
    renderContact() {
        const contactInfoBox = document.querySelector('.contact-info-box');
        if (!contactInfoBox) return;

        // Get the contact items container
        let itemsDiv = contactInfoBox.querySelector('[data-contact-items]');
        if (!itemsDiv) {
            itemsDiv = document.createElement('div');
            itemsDiv.setAttribute('data-contact-items', '');
            contactInfoBox.appendChild(itemsDiv);
        }

        itemsDiv.innerHTML = '';

        // Email 1
        const email1 = document.createElement('div');
        email1.className = 'contact-item';
        email1.innerHTML = `
            <i class="fas fa-envelope"></i>
            <span>${this.data.contact.email1}</span>
        `;
        itemsDiv.appendChild(email1);

        // Email 2
        const email2 = document.createElement('div');
        email2.className = 'contact-item';
        email2.innerHTML = `
            <i class="fas fa-envelope"></i>
            <span>${this.data.contact.email2}</span>
        `;
        itemsDiv.appendChild(email2);

        // Phone
        const phone = document.createElement('div');
        phone.className = 'contact-item';
        phone.innerHTML = `
            <i class="fas fa-phone"></i>
            <span>${this.data.contact.phone}</span>
        `;
        itemsDiv.appendChild(phone);

        // Social Icons
        let socialIcons = contactInfoBox.querySelector('.social-icons');
        if (!socialIcons) {
            socialIcons = document.createElement('div');
            socialIcons.className = 'social-icons';
            contactInfoBox.appendChild(socialIcons);
        }
        
        socialIcons.innerHTML = `
            <a href="${this.data.contact.github}" title="GitHub" target="_blank"><i class="fab fa-github"></i></a>
            <a href="${this.data.contact.linkedin}" title="LinkedIn" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="${this.data.contact.codeforces}" title="CodeForces" target="_blank"><i class="fas fa-code"></i></a>
        `;
    }

    // Render Footer
    renderFooter() {
        const footer = document.querySelector('footer');
        if (!footer) return;

        const p = footer.querySelector('p');
        if (p) {
            p.innerHTML = `&copy; ${this.data.footer.year} ${this.data.footer.name}. ${this.data.footer.message}.`;
        }
    }

    // Render all sections
    renderAll() {
        this.renderHero();
        this.renderEducation();
        this.renderProjects();
        this.renderSkills();
        this.renderAchievements();
        this.renderContact();
        this.renderFooter();
    }
}

// Initialize rendering on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired');
    console.log('portfolioData defined:', typeof portfolioData !== 'undefined');
    
    if (typeof portfolioData !== 'undefined' && portfolioData) {
        try {
            const renderer = new PortfolioRenderer(portfolioData);
            renderer.renderAll();
            console.log('Portfolio rendered successfully');
        } catch (error) {
            console.error('Error rendering portfolio:', error);
        }
    } else {
        console.error('portfolioData is not defined. Make sure portfolio.js is loaded first.');
    }
});
