// let boton = document.getElementById("boton");

// let wh = () => {
//     console.log("Width "+document.documentElement.clientWidth);
//     console.log("Height "+document.documentElement.clientHeight);
// }

// boton.addEventListener("click", wh);

// let cardplaylist = document.getElementById("card-playlist");
// let buttonplay = document.getElementById("button-play");

// let cardplaylist = document.getElementById("card-playlist");
// let buttonplay = document.getElementById("button-play");

// let display = () => {
//     // buttonplay.style.transform = "scale(100%)"
//     buttonplay.style.opacity = "unset";
//     buttonplay.style.transition = "all 0.2s";
//     console.log("hola");
//     // buttonplay.style.display = "unset";
// }

// let displayNone = () => {
//     // buttonplay.style.transform = "scale(0)"
//     buttonplay.style.opacity = "0";
//     buttonplay.style.transition = "all 0.2s";
//     console.log("chau");
// }



// cardplaylist.addEventListener("mouseover", display);
// cardplaylist.addEventListener("mouseleave", displayNone);

let fatherDiv = document.getElementById("container-cards-playlists");




class Card {
    constructor(i, t, s) {
        this.imagen = i;
        this.titulo = t;
        this.icono = s;
    }
    xImagen() {
        let source = this.imagen;
        console.log("esto sacó del xImagen "+ source);
        return source
    }
    xTitulo() {
        let value = this.titulo;
        console.log("esto sacó el xtitulo "+ value)
        return value
    }
}

var coleccion = [];
coleccion.push(new Card("./resources/images/first.png", "Ejemplo 1", "fa fa-play"));
coleccion.push(new Card("./resources/images/first.png", "Ejemplo 1", "fa fa-play"));
coleccion.push(new Card("./resources/images/first.png", "Ejemplo 1", "fa fa-play"));
coleccion.push(new Card("./resources/images/first.png", "Ejemplo 1", "fa fa-play"));
coleccion.push(new Card("./resources/images/first.png", "Ejemplo 1", "fa fa-play"));

let cantidad = toString(coleccion.length);

for(var x of coleccion)
{
    let childDiv = document.createElement('div');
    childDiv.setAttribute("class", "card-playlist");
    let img = document.createElement('img');
    img.src = x.xImagen();
    fatherDiv.appendChild(childDiv);
    childDiv.appendChild(img)
    let info = document.createElement('div');
    info.setAttribute("class", "info");
    let span = document.createElement('span');
    span.textContent = x.xTitulo();
    info.appendChild(span);
    let botonDiv = document.createElement('div');
    botonDiv.setAttribute("class", "button-play");
    let boton = document.createElement('span');
    boton.setAttribute("class", "fa fa-play");
    boton.setAttribute("aria-hidden", "true");
    botonDiv.appendChild(boton);
    info.appendChild(botonDiv);
    childDiv.appendChild(info);
}

// for(let x of coleccion)
// {
//   console.log(x);
//   x.mostrarImagen()
// }


// <div class="card-playlist" id="card-playlist">
//                             <img src="./resources/images/first.png" alt="portada">
//                             <div class="info">
//                                 <span>Ejemplo 1</span>
//                                 <div class="button-play" id="button-play">
//                                     <span class="fa fa-play" aria-hidden="true"></span>
//                                 </div>
//                             </div>
//                         </div>

