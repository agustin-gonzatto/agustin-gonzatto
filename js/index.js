function desplegar() {
  document.getElementById("check").addEventListener("click", () => {
    if (document.getElementById("check").checked) {
      document.getElementById("desplegar").style.left = "0";
    } else {
      document.getElementById("desplegar").style.left = "-100%";
    }
  });
}

function enviar(){
    document.getElementById("enviar").addEventListener("click", ()=>{
        document.getElementById("form").submit();
    })
}

function trabajos(){
    fetch("json/trabajos.json")
    .then((res) => res.json())
    .then((data) => {
        data.trabajos.forEach(element => {
            document.getElementById("trabajos").innerHTML += `
                <div class="tarjeta">
                    <img src="${element.img}" alt="">
                    <div>
                        <h1>${element.nombre}</h1>
                        <br/>
                        <a class="enviar" href="${element.link}">Click Aquí</a>
                        <br/><br/>
                    </div>
                </div>
            `
    });
})
}

window.addEventListener("DOMContentLoaded", () => {
    desplegar();
    enviar();
    trabajos();
  });