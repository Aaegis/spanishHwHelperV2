wordList = ["El problema", "¿Qué hora es?", "¿A dónde?", "Triste", "Tranquilo",
"Ocupado", "Nervioso", "Enojado", "Emociando", "Deprimido",
"Contento", "Cansado", "El pasillo", "Oficina del director", "El gimnasio",
"La cafetería", "La biblioteca", "El baño", "Lejos de", "Encima de",
"Detrás de", "Dentro de", "Delante de", "Debajo de", "Cerca de", "Al lado de", "interesante", "Divertido",
"Aburrido", "La ventana", "La tiza", "La silla", "El reloj", "La puerta", "La pluma", "El pizarrón",
"El papel", "La mochila", "El mapa", "El lápiz", "El escritorio", "El cuaderno", "la calculadora", "El borrador"];

function randomize() {
    var currentIndex = wordList.length;
    var randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [wordList[currentIndex], wordList[randomIndex]] = [wordList[randomIndex], wordList[currentIndex]];
    }
    document.getElementById("textArea").innerHTML = wordList.join("\n");
}

document.getElementById('randomizeButton').onclick = function() {
    randomize();
}