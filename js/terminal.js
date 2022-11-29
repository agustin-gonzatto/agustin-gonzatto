var words = ["Hola! soy Agustín Gonzatto", "Desarrollador Front-end", "Estudiante de Ingeniería Eléctrica"]
let i = 0;
let j = 0;
let cont = 0;

function avanzar() {
    if (i >= words[j].length) {
        j++
        i = 0;
        document.getElementsByClassName("word")[0].innerHTML += "<br>"
            typing(words);
    }
}

function typing() {
    if (i < words[j].length) {
        document.getElementsByClassName("word")[0].innerHTML += words[j].charAt(i);
        i++;
        avanzar();
        setTimeout(typing, 110);
    }

}

 typing(words);

