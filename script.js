function saludar() {
    window.alert("¡Hola! Gracias por visitar mi página web.");
}

const codigoQr = document.querySelector("#codigo-qr");

if (codigoQr) {
    const urlDeLaPagina = window.location.href;
    codigoQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(urlDeLaPagina)}`;
}