

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

