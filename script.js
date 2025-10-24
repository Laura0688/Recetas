// juego de priedra, papel o tijera
function determinaGanador(jugador1, jugador2) {
    if (jugador1 == jugador2) {
        return "Empate";
    } else if (
        (jugador1 == "piedra" && jugador2 == "tijera") 
        (jugador1 == "tijera" && jugador2 == "papel")
        (jugador1 == " papel" && jugador2 == "piedra")
    ) {
        return "Jugador 1 gana";
    } else {
        return "Jugador 2 gana";
    }
}

console.log(determinaGanador("piedra", "tijera")); // Jugador 1 gana
console.log(determinaGanador("papel", "piedra")); // Jugador 1 gana
console.log(determinaGanador("tijera", "papel")); // Jugador 1 gana
console.log(determinaGanador("tijera", "piedra")); // Jugador 2 gana
console.log(determinaGanador("piedra", "papel")); // Jugador 2 gana
console.log(determinaGanador("papel", "tijera")); // Jugador 2 gana 
console.log(determinaGanador("piedra", "piedra")); // Empate

function jugar() {
    let jugador1 = prompt("jugador 1: elige: piedra, papel o tijera");
    let jugador2 = prompt("jugador 2: elige: piedra, papel o tijera");
    alert(determinaGanador(jugador1, jugador2));
}

jugar();