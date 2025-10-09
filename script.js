/* script.js - interactions for Atelier & Potager */

/* Scene switching */
const btnAtelier = document.getElementById('btn-atelier');
const btnPotager = document.getElementById('btn-potager');
const atelier = document.getElementById('atelier');
const potager = document.getElementById('potager');

btnAtelier.addEventListener('click', () => {
  btnAtelier.classList.add('active');
  btnPotager.classList.remove('active');
  atelier.classList.add('active');
  potager.classList.remove('active');
  atelier.setAttribute('aria-hidden','false');
  potager.setAttribute('aria-hidden','true');
});

btnPotager.addEventListener('click', () => {
  btnPotager.classList.add('active');
  btnAtelier.classList.remove('active');
  potager.classList.add('active');
  atelier.classList.remove('active');
  potager.setAttribute('aria-hidden','false');
  atelier.setAttribute('aria-hidden','true');
});

/* Subtle 3D parallax: rotate scene with mouse */
const scene = document.getElementById('scene');
scene.addEventListener('mousemove', (e) => {
  const w = scene.clientWidth;
  const h = scene.clientHeight;
  const x = (e.clientX - w/2) / w; // -0.5 .. 0.5
  const y = (e.clientY - h/2) / h;
  const rotY = x * 6; // degrees
  const rotX = -y * 6;
  scene.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
});
scene.addEventListener('mouseleave', () => {
  scene.style.transform = '';
});

/* Modal handling for atelier objects */
document.querySelectorAll('.object').forEach(obj => {
  obj.addEventListener('click', () => {
    const target = obj.dataset.target;
    openModal(target);
  });
  // keyboard support
  obj.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const target = obj.dataset.target;
      openModal(target);
    }
  });
});

function openModal(id) {
  if (!id) return;
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.setAttribute('aria-hidden','false');
}

/* Close buttons */
document.querySelectorAll('.modal .close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').setAttribute('aria-hidden','true');
  });
});

/* Close modal when clicking outside (simple) */
window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (modal.getAttribute('aria-hidden') === 'false' && !modal.contains(e.target) && !e.target.classList.contains('object')) {
      modal.setAttribute('aria-hidden','true');
    }
  });
});

/* Potager: clicking a plot opens a descriptive modal with tailored text */
const skillMap = {
  'curiosité': {title: 'Curiosité', desc: "J'aime explorer de nouvelles technologies, expérimenter des idées et apprendre en continu."},
  'patience': {title: 'Patience', desc: "Travailler sur des projets long terme, tester, itérer — j'acquiers la patience nécessaire pour aboutir."},
  'créativité': {title: 'Créativité', desc: "Je compose des interfaces et des expériences originales, en mêlant code et esthétique."},
  'écoute': {title: 'Écoute', desc: "Savoir écouter les retours, les besoins utilisateurs et collaborer efficacement."},
  'photographie': {title: 'Photographie', desc: "La photo est une passion qui nourrit mon sens du cadrage et de la lumière."},
  'musique': {title: 'Musique', desc: "La musique m'inspire et m'accompagne dans mes sessions créatives."}
};
document.querySelectorAll('.plant-plot').forEach(plot => {
  plot.addEventListener('click', () => {
    const key = plot.dataset.skill;
    const data = skillMap[key] || {title:key, desc:"Plus d'infos..."};
    const modal = document.getElementById('modal-skill');
    modal.querySelector('#skill-title').textContent = data.title;
    modal.querySelector('#skill-desc').textContent = data.desc;
    modal.setAttribute('aria-hidden','false');
  });
  plot.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      plot.click();
    }
  });
});

/* Simple fish animation: moves the fish group horizontally */
const fish = document.querySelector('.fish');
if (fish) {
  let pos = 0;
  let dir = 1;
  setInterval(() => {
    pos += dir * 1.3;
    if (pos > 50) dir = -1;
    if (pos < -10) dir = 1;
    fish.setAttribute('transform', `translate(${pos},28) scale(${dir > 0 ? 1 : -1},1)`);
  }, 80);
}

/* Generate & download a simple example CV (replaceable) */
const genBtn = document.getElementById('gen-download');
const downloadLink = document.getElementById('download-cv');

function generateCVBlob() {
  const cvText = [
    "Lilwenn - CV (exemple)",
    "---------------------",
    "Rôle: Développeuse web",
    "Compétences: HTML, CSS, JS, UX, créativité",
    "Projets: Portfolio, App JS, Site artistique",
    "Contact: lilwenn@example.com",
    "Remplacez ce fichier par un vrai PDF dans le dépôt."
  ].join("\n\n");
  return new Blob([cvText], {type: 'text/plain'});
}

if (genBtn) {
  genBtn.addEventListener('click', () => {
    const blob = generateCVBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV-Lilwenn.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
}

// Top bar download link also triggers the same
downloadLink.addEventListener('click', (e) => {
  e.preventDefault();
  const blob = generateCVBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'CV-Lilwenn.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});
