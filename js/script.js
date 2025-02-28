
// Añadimos a la sección del menú una clase para que aparezca y desaparezca, cuando se clicka el botón
let botonMenu = querySelector("#burger");

function myFunction() {
    let element = document.querySelector(".menu");
    element.classList.toggle("menuBlock");

    let element2 = document.querySelector("#burger");
    element2.classList.toggle("gold");
}






