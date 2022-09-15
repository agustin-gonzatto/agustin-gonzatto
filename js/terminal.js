var words = ["Hola! soy Agustín Gonzatto", "Desarrollador Front-end", "Estudiante de Ingeniería Eléctrica", " Trabajemos juntos!"],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
let j = 0;
let cont = 0;

function avanzar() {
    if (i >= words[j].length) {
        j++
        i = 0;
        document.getElementsByClassName("word")[0].innerHTML += "<br><br>"
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

