

// ARRETER LA VIDÉO QUAND ON CLIQUE SUR LA CROIX POUR SORTIR DE LA MODALE

document.addEventListener("DOMContentLoaded", function () {
    let modals = document.querySelectorAll(".modal"); // Sélectionne toutes les modales

    modals.forEach(modal => {
        let iframe = modal.querySelector("iframe"); // Sélectionne l'iframe dans chaque modale
        
        modal.addEventListener("hidden.bs.modal", function () {
            if (iframe) {
                let iframeSrc = iframe.src;
                iframe.src = ""; // Vide l'URL pour arrêter la vidéo
                setTimeout(() => { iframe.src = iframeSrc; }, 300); // Recharge après une courte pause
            }
        });
    });
});



// LANCER AUTOMATIQUEMENT LA VIDÉO LORSQUE LA MODALE APPARAIT

document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner toutes les modales contenant une vidéo
    const videoModals = document.querySelectorAll('.videoModal');
  
    videoModals.forEach(videoModal => {
      const iframe = videoModal.querySelector('iframe'); // Sélectionner directement l'iframe
  
      if (iframe) {
        let originalSrc = iframe.src; // Stocker l'URL originale de l'iframe
  
        // Quand la modale est ouverte
        videoModal.addEventListener('shown.bs.modal', function () {
          iframe.src = originalSrc + (originalSrc.includes('?') ? '&' : '?') + 'autoplay=1'; // Gérer correctement les paramètres d'URL
        });
  
        // Quand la modale est fermée
        videoModal.addEventListener('hidden.bs.modal', function () {
          iframe.src = ''; // Vider le src pour arrêter complètement la vidéo
          setTimeout(() => iframe.src = originalSrc, 300); // Restaurer après un court délai
        });
      }
    });
});



// LANCER AUTOMATIQUEMENT LA VIDÉO LORSQUE LA MODALE APPARAIT

document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.getElementById('carouselExample');
  let iframes = carousel.querySelectorAll("iframe");

  carousel.addEventListener("slide.bs.carousel", function (event) {
      // Arrêter toutes les vidéos
      iframes.forEach(iframe => {
          let src = iframe.src;
          iframe.src = "";  // Réinitialiser la vidéo
          iframe.src = src;  // Remettre la vidéo à l'état initial (arrêtée)
      });

      // Lancer automatiquement la nouvelle vidéo si elle est un iframe
      let nextSlide = event.relatedTarget; // Prochain slide
      let nextIframe = nextSlide.querySelector("iframe");
      if (nextIframe) {
          let src = nextIframe.src;
          if (src.includes("autoplay=0")) {
              nextIframe.src = src.replace("autoplay=0", "autoplay=1"); // Activer autoplay
          } else {
              nextIframe.src += "&autoplay=1"; // Ajouter autoplay
          }
      }
  });
});





// Liste des vidéos
const videos = [
  "https://www.youtube.com/embed/nmnwi4LDBgg?&si=NTEVq4OZFl1Z077e",
  "https://www.youtube.com/embed/csYRchkbomY?si=OTvtlOSlQBWLYc3l",
  "https://www.youtube.com/embed/UQ_rWC88b40?si=89V71rf_CdimX5OB",
  "https://www.youtube.com/embed/abc123xyz456?si=abcd1234",
  "https://www.youtube.com/embed/xyz789abc123?si=wxyz7890",
  "https://www.youtube.com/embed/ghi456def789?si=xyz456ghi"
];

let currentIndex = 0; // Index de la vidéo actuelle

// Fonction pour ouvrir la modale avec une vidéo spécifique
function openVideoModal(index, modalId) {
    currentIndex = index;
    updateVideo(modalId);
    var videoModal = new bootstrap.Modal(document.getElementById(modalId));
    videoModal.show();
}

// Fonction pour changer de vidéo avec autoplay
function changeVideo(direction) {
    currentIndex += direction;

    // Vérifie les limites
    if (currentIndex < 0) {
        currentIndex = videos.length - 1; // Revient à la dernière vidéo
    } else if (currentIndex >= videos.length) {
        currentIndex = 0; // Revient à la première vidéo
    }

    // Mets à jour toutes les modales ouvertes avec la nouvelle vidéo
    const modals = document.querySelectorAll('.modal.show');
    modals.forEach(modal => {
        const modalId = modal.id;
        updateVideo(modalId);
    });
}

// Fonction qui met à jour la vidéo et le titre
function updateVideo(modalId) {
    const videoIframe = document.querySelector(`#${modalId} iframe`);
    const videoTitle = document.querySelector(`#${modalId} .modal-title`);

    // Génère l'URL avec autoplay activé
    const autoplayUrl = videos[currentIndex] + "&autoplay=1";

    // Met à jour l'iframe et le titre
    videoIframe.src = autoplayUrl;
    videoTitle.textContent = `Vidéo ${currentIndex + 1}`;
}
