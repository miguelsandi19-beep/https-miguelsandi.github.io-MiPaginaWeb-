function saludar() {
    window.alert("¡Hola! Gracias por visitar mi página web.");
}

const codigoQr = document.querySelector("#codigo-qr");

if (codigoQr) {
    const urlDeLaPagina = window.location.href;
    codigoQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(urlDeLaPagina)}`;
}

document.querySelectorAll(".boton-detalle").forEach((boton) => {
    boton.addEventListener("click", () => {
        const tarjeta = boton.closest(".tarjeta");
        const detalle = document.getElementById(boton.getAttribute("aria-controls"));
        const estaAbierto = tarjeta.classList.toggle("abierta");

        boton.setAttribute("aria-expanded", String(estaAbierto));
        detalle.setAttribute("aria-hidden", String(!estaAbierto));
    });
});
