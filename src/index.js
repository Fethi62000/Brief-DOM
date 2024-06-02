

const slidesContainer = document.getElementById("diaporama-couleurs");
const slide = document.querySelector(".couleur");
const prevButton = document.getElementById("fleche-defilement-prev");
const nextButton = document.getElementById("fleche-defilement-next");




nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});



prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});




