/**
 * Gestion des modales
 * Ouvre et ferme les fenêtres d'information
 */

/**
 * Ouvre une modale avec le contenu correspondant
 * @param {string} item - L'identifiant du contenu à afficher
 */
function openModal(item) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const text = document.getElementById('modal-text');
    
    // Récupère le contenu depuis content.js
    if (content[item]) {
        title.textContent = content[item].title;
        text.textContent = content[item].text;
        modal.style.display = 'flex';
    }
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