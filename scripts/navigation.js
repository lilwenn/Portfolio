/**
 * Gestion de la navigation entre les espaces
 * Permet de passer de l'atelier au potager et inversement
 */

/**
 * Affiche l'espace atelier et cache le potager
 */
function showAtelier() {
    document.getElementById('atelier').style.display = 'block';
    document.getElementById('potager').style.display = 'none';
}

/**
 * Affiche l'espace potager et cache l'atelier
 */
function showPotager() {
    document.getElementById('atelier').style.display = 'none';
    document.getElementById('potager').style.display = 'block';
}

/**
 * Télécharge le CV
 */
function downloadCV() {
    // Version simple avec alerte
    alert('Téléchargement du CV (fonctionnalité à implémenter avec votre fichier PDF)');
    
    // Pour implémenter le vrai téléchargement, décommentez et ajoutez votre fichier PDF :
    /*
    const link = document.createElement('a');
    link.href = 'assets/files/CV_Lilwenn.pdf';
    link.download = 'CV_Lilwenn.pdf';
    link.click();
    */
}