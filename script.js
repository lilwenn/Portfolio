// Ouvre une fenêtre quand on clique sur un objet
document.querySelectorAll('.objet').forEach(objet => {
    objet.addEventListener('click', () => {
      const id = 'modal-' + objet.id;
      document.getElementById(id).style.display = 'block';
    });
  });
  
  // Ferme les modales
  document.querySelectorAll('.fermer').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
  });
  
  // Ferme quand on clique à l’extérieur
  window.onclick = function(e) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (e.target === modal) modal.style.display = 'none';
    });
  };
  