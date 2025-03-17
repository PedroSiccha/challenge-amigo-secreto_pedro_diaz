let amigos = [];
const botonSortear = document.getElementById("botonSortear");
const botonLimpiar = document.getElementById("botonLimpiar");
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
    actualizarEstadoBotones();
}
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();
    }
});
function actualizarEstadoBotones() {
    botonSortear.disabled = amigos.length === 0;
    botonSortear.style.opacity = amigos.length === 0 ? "0.5" : "1";
    botonLimpiar.disabled = amigos.length === 0;
    botonLimpiar.style.opacity = amigos.length === 0 ? "0.5" : "1";
}
function limpiarLista() {
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
    actualizarEstadoBotones();
}
actualizarEstadoBotones();
