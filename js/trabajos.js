function mostrar(data) {
    data.trabajos.forEach(element => {
        document.getElementById("trabajos").innerHTML += `<div class="card item carta">
        <div class="face front">
            <img src="${element.img}" alt="" />
            <div class="card-body">
                <p class="card-text"><b>${element.nombre}</b></p>                
            </div>
        </div>
        <div class="face back">
            <p>${element.des}</p>
            <hr>
            <a href="${element.link}">Click aquí</a>
        </div>
    </div>`;
    });
    
}

fetch("json/trabajos.json")
    .then((res) => res.json())
    .then((data) => {
        mostrar(data);
    });
