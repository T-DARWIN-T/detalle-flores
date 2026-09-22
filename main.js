onload = () =>{
    document.body.classList.remove("container");
};

// --- LÓGICA DEL MENSAJE OCULTO ---
document.addEventListener("DOMContentLoaded", () => {
    const btnFlor = document.getElementById("florSecreta");
    const modal = document.getElementById("modalSecreto");
    const cerrar = document.querySelector(".cerrar-modal");

    if (btnFlor && modal && cerrar) {
        // Mostrar el modal con el mensaje secreto al hacer clic en la flor
        btnFlor.addEventListener("click", () => {
            modal.style.display = "block";
        });

        // Cerrar el modal al presionar la X
        cerrar.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Cerrar el modal al hacer clic en el fondo oscuro exterior
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});