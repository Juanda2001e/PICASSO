const bt_derecha = document.querySelector(".derecha-galeria"),
    bt_izquierda = document.querySelector(".izquierda-galeria"),
    slider = document.querySelector(".slider-galeria"),
    slider_section = document.querySelectorAll(".slider-section-galeria"),
    tap =(slider_section.length /2 ),
    tap_movil = (slider_section.length  /0.5),
    responsive_nav= document.querySelector(".responsive_nav"),
    abrir_menu = document.querySelector("#abrir-menu"),
    cerrar_menu = document.querySelector("#cerrar-menu");


    bt_derecha.addEventListener("click", moveToRigth);
    bt_izquierda.addEventListener("click", moveToLeft);

    let contador = 0;
    let operacion = 0;
    console.log(tap);
    function moveToRigth() {
        if (contador >= tap - 1) {
            bt_derecha.style.visibility = "hidden";
            return;
        }
        contador++;
        operacion = operacion + 20;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease 0.9s";
        bt_izquierda.style.visibility = "visible";
    }

    function moveToLeft() {
        if (contador > 0) {
            contador--;
            operacion = operacion - 20;
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "all ease 0.9s";
            bt_derecha.style.visibility = "visible";
        }
        if (contador === 0) {
            bt_izquierda.style.visibility = "hidden";
        }
    }
    //carrucel Productos//
const bt_derechapro = document.querySelector(".derecha-producto"),
    bt_izquierdapro= document.querySelector(".izquierda-producto"),
    sliderpro = document.querySelector(".slider-producto"),
    slider_sectionpro = document.querySelectorAll("slider-section-producto");

    bt_derechapro.addEventListener("click", moveToRigthPro);
    bt_izquierdapro.addEventListener("click", moveToLeftPro);

    function moveToRigthPro() {
        if (contador >= tap - 1) {
            bt_derechapro.style.visibility = "hidden";
            return;
        }
        contador++;
        operacion = operacion + 20;
        sliderpro.style.transform = `translate(-${operacion}%)`;
        sliderpro.style.transition = "all ease 0.9s";
        bt_izquierdapro.style.visibility = "visible";
    }

    function moveToLeftPro() {
        if (contador > 0) {
            contador--;
            operacion = operacion - 20;
            sliderpro.style.transform = `translate(-${operacion}%)`;
            sliderpro.style.transition = "all ease 0.9s";
            bt_derechapro.style.visibility = "visible";
        }
        if (contador === 0) {
            bt_izquierdapro.style.visibility = "hidden";
        }
    }
    function moveToRigthProMovil() {
        if (contador >= tap_movil + 0.5) {
            bt_derechapro.style.visibility = "hidden";
            return;
        }
        contador++;
        operacion = operacion + 30;
        sliderpro.style.transform = `translate(-${operacion}%)`;
        sliderpro.style.transition = "all ease 0.9s";
        bt_izquierdapro.style.visibility = "visible";
    }
    function moveToLeftProMovil() {
        if (contador > 0) {
            contador--;
            operacion = operacion - 30;
            sliderpro.style.transform = `translate(-${operacion}%)`;
            sliderpro.style.transition = "all ease 0.9s";
            bt_derechapro.style.visibility = "visible";
        }
        if (contador === 0) {
            bt_izquierdapro.style.visibility = "hidden";
        }
    }

if (window.innerWidth < 720) {
    bt_derechapro.addEventListener("click", moveToRigthProMovil);
    bt_izquierdapro.addEventListener("click", moveToLeftProMovil);
    
}
// Botón Volver Arriba
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
        
    }
);