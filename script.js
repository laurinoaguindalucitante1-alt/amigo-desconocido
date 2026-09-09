const boton = document.getElementById("abrir");
const botella = document.getElementById("botella");
const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");

boton.addEventListener("click", () => {
    botella.style.transform = "scale(1.3) rotate(10deg)";
    botella.style.opacity = "0";

    setTimeout(() => {
        inicio.style.display = "none";
        carta.classList.add("mostrar");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 800);
});