

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




// PASSER D'UNE VIDÉO À UNE AUTRE AVEC LES BOUTONS "SUIVANT" ET "PRÉCÉDENT"

function changeVideo(direction, modalId) {
    const modals = document.querySelectorAll('.videoModal');
    let currentIndex = Array.from(modals).findIndex(modal => modal.id === modalId);

    if (currentIndex === -1) return;

    let newIndex = (currentIndex + direction + modals.length) % modals.length;
    let newModal = modals[newIndex];

    // Ferme la modale actuelle
    let currentModalInstance = bootstrap.Modal.getInstance(document.getElementById(modalId));
    if (currentModalInstance) {
        currentModalInstance.hide();
    }

    // Ouvre la nouvelle modale
    let newModalInstance = new bootstrap.Modal(newModal);
    newModalInstance.show();

    // Mise à jour du titre et de la vidéo
    const videoTitle = newModal.querySelector(".modal-title");
    const iframe = newModal.querySelector(".iframe");
    videoTitle.textContent = `Vidéo ${newIndex + 1}`;
    iframe.src = iframe.src; // Recharge la vidéo pour éviter les bugs d'autoplay
}
