

document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementsByClassName("modal");

    if (modal) {
        let iframe = modal.querySelector("iframe");

        modal.addEventListener("hidden.bs.modal", function () {
            if (iframe) {
                let src = iframe.getAttribute("src"); // Récupère l'URL de l'iframe
                iframe.setAttribute("src", ""); // Vide le src pour stopper la vidéo
                iframe.setAttribute("src", src); // Recharge la vidéo
            }
        });
    }
});
