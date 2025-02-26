let links = document.querySelectorAll('.nav-link');
console.log("hola");

// links.forEach(link => {
//     link.addEventListener("click", function() {
//         links.forEach(a => a.classList.remove("active"));
//         this.classList.add("active");
//     });
// });

document.querySelectorAll(".nav-link a").forEach (link => {
    link.addEventListener("click", function() {
        document.querySelectorAll(".nav-link a").forEach(a => a.classList.remove("active"));
        this.classList.add("active");
    });
});

let burger = document.querySelector("#burger img");
let hero_main = document.querySelector(".hero_main");
burger.addEventListener("click", function(){
    hero_main.classList.add("margin-top");
});



