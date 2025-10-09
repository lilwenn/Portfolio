/**
 * Gestion avancée des modales avec contenu multimédia
 */

/**
 * Ouvre une modale avec du contenu enrichi
 * @param {string} item - L'identifiant du contenu à afficher
 */
function openModal(item) {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    
    // Récupère le contenu
    const data = contentAdvanced[item] || content[item];
    
    if (!data) return;
    
    // Construit le HTML de la modale
    let html = `
        <button class="modal-close" onclick="closeModal()">×</button>
        <h2 class="modal-title">${data.title}</h2>
    `;
    
    // Image principale
    if (data.image) {
        html += `<img src="${data.image}" alt="${data.title}" class="modal-image">`;
    }
    
    // Vidéo
    if (data.video) {
        html += `
            <video class="modal-video" controls>
                <source src="${data.video}" type="video/mp4">
                Votre navigateur ne supporte pas la vidéo.
            </video>
        `;
    }
    
    // Description principale
    if (data.description) {
        html += `<p class="modal-text">${data.description}</p>`;
    }
    
    // Tags/Compétences
    if (data.tags && data.tags.length > 0) {
        html += `<div class="modal-tags">`;
        data.tags.forEach(tag => {
            html += `<span class="modal-tag">${tag}</span>`;
        });
        html += `</div>`;
    }
    
    // Sections
    if (data.sections && data.sections.length > 0) {
        data.sections.forEach(section => {
            html += `
                <div class="modal-section">
                    <h3 class="modal-section-title">${section.title}</h3>
                    <div class="modal-section-content">${section.content}</div>
                </div>
            `;
        });
    }
    
    // Timeline
    if (data.timeline && data.timeline.length > 0) {
        html += `<div class="modal-timeline">`;
        data.timeline.forEach(item => {
            html += `
                <div class="timeline-item">
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-content">
                        <strong>${item.title}</strong><br>
                        ${item.content}
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    }
    
    // Galerie d'images
    if (data.gallery && data.gallery.length > 0) {
        html += `<div class="modal-gallery">`;
        data.gallery.forEach(img => {
            html += `
                <img src="${img.src}" 
                     alt="${img.alt}" 
                     title="${img.title}"
                     onclick="openImageFullscreen('${img.src}')">
            `;
        });
        html += `</div>`;
    }
    
    // Liens
    if (data.links && data.links.length > 0) {
        html += `<div class="modal-links">`;
        data.links.forEach(link => {
            html += `
                <a href="${link.url}" 
                   class="modal-link" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    ${link.icon} ${link.text}
                </a>
            `;
        });
        html += `</div>`;
    }
    
    // Injecte le contenu et affiche la modale
    modalContent.innerHTML = html;
    modal.style.display = 'flex';
}

/**
 * Ouvre une image en plein écran
 * @param {string} src - URL de l'image
 */
function openImageFullscreen(src) {
    const fullscreen = document.createElement('div');
    fullscreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.95);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    `;
    
    fullscreen.appendChild(img);
    fullscreen.onclick = () => fullscreen.remove();
    document.body.appendChild(fullscreen);
}

/**
 * Ferme la modale active
 */
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

/**
 * Ferme la modale en cliquant en dehors du contenu
 */
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});