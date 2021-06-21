


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

let fatherDivPodcast = document.getElementById("container-cards-podcasts");

class CardP {
    constructor(i, t, s) {
        this.imagen = i;
        this.titulo = t;
        this.stitulo = s;
    }
    yImagen() {
        let source = this.imagen;
        console.log("esto sacó del xImagen "+ source);
        return source
    }
    yTitulo() {
        let value = this.titulo;
        console.log("esto sacó el xtitulo "+ value)
        return value
    }

    ySub() {
        let subvalue = this.stitulo;
        console.log("esto sacó el xtitulo "+ subvalue)
        return subvalue
    }
}

var coleccionP = [];
coleccionP.push(new CardP("https://3minutosdearte.com/wp-content/uploads/2018/08/Kirchner-Marcella-1910-e1554142943637.jpg", "Ejemplo 1", "Subtitulo ejemplo"));
coleccionP.push(new CardP("./resources/images/first.png", "Ejemplo 1", "Subtitulo ejemplo"));
coleccionP.push(new CardP("./resources/images/first.png", "Ejemplo 1", "Subtitulo ejemplo"));
coleccionP.push(new CardP("./resources/images/first.png", "Ejemplo 1", "Subtitulo ejemplo"));
coleccionP.push(new CardP("./resources/images/first.png", "Ejemplo 1", "Subtitulo ejemplo"));

for(var y of coleccionP)
{
    let childDivY = document.createElement('div');
    childDivY.setAttribute("class", "card-podcast");
    let imgY = document.createElement('img');
    imgY.src = y.yImagen();
    fatherDivPodcast.appendChild(childDivY);
    childDivY.appendChild(imgY)
    let infoY = document.createElement('div');
    infoY.setAttribute("class", "infoP");
    let h3 = document.createElement('h3');
    h3.textContent = y.yTitulo();
    infoY.appendChild(h3);
    let spanY = document.createElement('span');
    spanY.textContent = y.ySub();
    infoY.appendChild(spanY);
    childDivY.appendChild(infoY);
}
