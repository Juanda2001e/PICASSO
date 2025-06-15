const responsive_nav= document.querySelector(".responsive_nav"),
    abrir_menu = document.querySelector("#abrir-menu"),
    cerrar_menu = document.querySelector("#cerrar-menu"),
    volver_arriba = document.querySelector("#volver-arriba");

    const btnvolverarriba = document.getElementById("volver-arriba");

window.onscroll = function() {
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnvolverarriba.style.display = "block";
} else {
    btnvolverarriba.style.display = "none";
}
};
// Scroll suave al hacer clic
document.getElementById("volver-arriba").addEventListener("click", function () {
window.scrollTo({ top: 0, behavior: 'smooth' })});

abrir_menu.addEventListener("click", () => {
        responsive_nav.classList.add("visible"),
        // Aquí puedes agregar cualquier acción adicional al abrir el menú
        console.log("Menu abierto");
    }
);

cerrar_menu.addEventListener("click", () => {
        responsive_nav.classList.remove("visible");
});