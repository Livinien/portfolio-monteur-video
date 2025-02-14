

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



