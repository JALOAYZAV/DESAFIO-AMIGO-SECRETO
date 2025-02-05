// Selección de elementos del DOM
const amigos = [];
const inputNombre = document.getElementById('nombreAmigo');
const listaAmigos = document.getElementById('listaAmigos');
const adicionarBtn = document.getElementById('adicionarBtn');
const sortearBtn = document.getElementById('sortearBtn');
const resultado = document.getElementById('resultado');

// Función para agregar nombres a la lista
adicionarBtn.addEventListener('click', function() {
    const nombre = inputNombre.value.trim();

    // Validación de entrada
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array y la lista HTML
    amigos.push(nombre);
    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    // Limpiar el campo de texto
    inputNombre.value = "";
});

// Función para hacer el sorteo
sortearBtn.addEventListener('click', function() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
});
