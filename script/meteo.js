//Le fichier JS pour la partie Météo

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("aside button");
    const cardMeteo = document.querySelector(".cardMeteo");

    // Création de la div info
    const info = document.createElement("div");

    // Application du style
    info.style.height = "300px";
    info.style.width = "200px";
    info.style.margin = "16px 0";
    info.style.border = "3px solid grey";
    info.style.padding = "16px 12px 24px 12px";

    // Insertion dans la div cardMeteo, avant le bouton
    cardMeteo.insertBefore(info, button);

    // Fonction pour ajouter du texte à la div info
    function addInfo() {
        info.textContent = "Voici la météo intergalactique à venir... 🌤️";
    }

    // Fonction pour ajouter une classe au bouton
    function bouton() {
        button.classList.add("button__cardMeteo");
    }

    // Lorsqu'on maintient le clic sur le bouton
    button.addEventListener("mousedown", function () {
        button.style.backgroundColor = "orange";
    });

    // Lorsqu'on relâche le clic n'importe où dans la page
    document.addEventListener("mouseup", function () {
        button.style.backgroundColor = ""; // revient à la couleur CSS par défaut
    });

    // Appel des fonctions
    addInfo();
    bouton();
});
