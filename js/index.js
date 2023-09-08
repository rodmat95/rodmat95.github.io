// Selecciona elementos del DOM y los asigna a variables
const body = document.querySelector("body"), // Elemento <body>
    sidebar = body.querySelector("nav"), // Barra lateral de navegación
    toggle = body.querySelector(".toggle"), // Botón de alternar la barra lateral
    modeSwitch = body.querySelector(".toggle-switch"), // Interruptor de modo
    modeText = body.querySelector(".mode-text"); // Texto de modo (Claro/Oscuro)

// Agrega un event listener al botón de alternar (posiblemente un menú)
toggle.addEventListener("click", () => {
    // Alterna la clase "close" en la barra lateral para ocultarla o mostrarla
    sidebar.classList.toggle("close");
});

// Agrega un event listener al interruptor de modo
modeSwitch.addEventListener("click", () => {
    // Alterna la clase "dark" en el elemento <body> para cambiar el tema de la página
    body.classList.toggle("dark");

    // Actualiza el texto del modo (Claro/Oscuro) según el estado del modo
    if (body.classList.contains("dark")) {
        modeText.innerText = "Claro";
    } else {
        modeText.innerText = "Oscuro";
    }
});