

const slidesContainer = document.getElementById("diaporama-couleurs");
const slide = document.querySelector(".couleur");                      // On déclare des variables que l'on assigne des éléments HTML à l'aide de leur ID et classe 
const prevButton = document.getElementById("fleche-defilement-prev");
const nextButton = document.getElementById("fleche-defilement-next");




nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;       // 
    slidesContainer.scrollLeft += slideWidth;
});




prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});










