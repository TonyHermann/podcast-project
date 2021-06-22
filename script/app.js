alert("Aviso, esta página está diseñada originalmente para monitores con resolución 16:9 y 1920x1080px; por lo que es probable que si tu monitor no cuenta con estas características, no puedas ver el diseño de la página web como se debe. Si es tu caso, te recomiendo apretar la tecla CTRL y la tecla menos - ");

let fatherDiv = document.getElementById("container-cards-playlists");
let songinfoh3 = document.getElementById("songinfo_h3");
let songinfospan = document.getElementById("songinfo_span");
let songinfoimg = document.getElementById("songinfo_img");

class Card {
    constructor(i, t, s) {
        this.imagen = i;
        this.titulo = t;
        this.icono = s;
    }
    xImagen() {
        let source = this.imagen;
        console.log("esto sacó del xImagen " + source);
        return source
    }
    xTitulo() {
        let value = this.titulo;
        console.log("esto sacó el xtitulo " + value)
        return value
    }
}

var coleccion = [];
coleccion.push(new Card("https://artsdot.com/ADC/Art.nsf/O/8XZNYG/$File/Dominicus-Lampsonius-Portrait-of-Pieter-Bruegel-the-Elder-2-.JPG", "Fly", "fa fa-play"));
coleccion.push(new Card("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-8dMLVNYmNr7pMOO-xu-GYU1ceI8oKOxjJZYAvcZIjYA3RpCPv3RuNbPZufKyR9Dns0&usqp=CAU", "Me", "fa fa-play"));
coleccion.push(new Card("https://www.hisour.com/wp-content/uploads/2020/01/Der-Blaue-Reiter-1280x720.jpg", "To the", "fa fa-play"));
coleccion.push(new Card("https://upload.wikimedia.org/wikipedia/commons/9/97/Ernst_Maria_Richard_Stadler.jpg", "Moon", "fa fa-play"));



let cantidad = toString(coleccion.length);

for (var x of coleccion) {
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
    constructor(i, t, s, song) {
        this.imagen = i;
        this.titulo = t;
        this.stitulo = s;
        this.song = song;
    }
    yImagen() {
        let source = this.imagen;
        console.log("esto sacó del yImagen " + source);
        return source
    }
    yTitulo() {
        let value = this.titulo;
        console.log("esto sacó el ytitulo " + value);
        return value
    }

    ySub() {
        let subvalue = this.stitulo;
        console.log("esto sacó el ysub " + subvalue);
        return subvalue
    }
    ySong() {
        let srcc = this.song;
        console.log("esto sacó el ySongSource " + srcc);
        return srcc
    }
}

var coleccionP = [];
coleccionP.push(new CardP("https://3minutosdearte.com/wp-content/uploads/2018/08/Kirchner-Marcella-1910-e1554142943637.jpg", "Overthink", "Antonio Alejo Serral Hermann, Tomas Ariel Quero, Bruno Marchett y Juan Cruz Mercadal", "./resources/audio/01 - My Dearest.mp3"));
coleccionP.push(new CardP("https://3minutosdearte.com/wp-content/uploads/2018/08/Kirchner-Marcella-1910-e1554142943637.jpg", "Artistin", "Marcella Kirchner"));
coleccionP.push(new CardP("https://cdn.discordapp.com/attachments/854073695780470784/856897914306560010/220px-Pieter_Bruegel_the_Elder_-_The_Painter_and_the_Buyer2C_1565_-_Google_Art_Project.png", "Pieter Brueghel el Viejo", "Autoretrato"));
coleccionP.push(new CardP("https://lamecanicaceleste.files.wordpress.com/2020/09/stadler.jpg?w=670", "Ernst Sadler", "Grandes exitos"));
coleccionP.push(new CardP("https://www.visitoslo.com/contentassets/3932b41a7b684b40a28d3195191265fe/edvard-munch-nasjonalbiblioteket.jpg?preset=Teaser", "This is Edvard Munch", "A spotify playlist"));
coleccionP.push(new CardP("https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Marc%2C_Franz_-_Blue_Horse_I_-_Google_Art_Project.jpg/220px-Marc%2C_Franz_-_Blue_Horse_I_-_Google_Art_Project.jpg", "This is Der Blaue Reiter"));

for (var y of coleccionP) {
    console.log(y);
    if (y.titulo === "Overthink") {
        let childDivY = document.createElement('div');
        childDivY.setAttribute("class", "card-podcast");
        childDivY.setAttribute("id", "ichi");
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
        let srccc = y.ySong();
        let titulete = y.yTitulo();
        let subtitulete = y.yTitulo();
        let image = y.yImagen();
        childDivY.addEventListener('click', function () {
            song.src = srccc;
            songinfoh3.textContent = titulete;
            songinfospan.textContent = subtitulete;
            songinfoimg.src = image;
            song.play();
        })
        
    } else {
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
        let srccc = y.ySong();
        let titulete = y.yTitulo();
        let subtitulete = y.yTitulo();
        let image = y.yImagen();
        childDivY.addEventListener('click', function () {
            song.src = srccc;
            songinfoh3.textContent = titulete;
            songinfospan.textContent = subtitulete;
            songinfoimg.src = image;
            song.play();
        })
    }
}


let play_button = document.getElementById("song_track_play_button");
let songtrack = document.getElementById("songtrack_range");
let volumetrack = document.getElementById("volume");
let song = document.getElementById("audio");
let pause_button = document.getElementById("song_track_stop_button");

let pause_button_two = document.getElementById("main_list_card_info_bottom_button_pause");
let play_button_two = document.getElementById("main_list_card_info_bottom_button_play")


let playS = () => {

    play_button.style.display = "none";
    pause_button.style.display = "unset";

    play_button_two.style.display = "none";
    pause_button_two.style.display = "unset";

    song.play();

}

let playSs = () => {

    play_button.style.display = "unset";
    pause_button.style.display = "none";

    play_button_two.style.display = "unset";
    pause_button_two.style.display = "none";

    song.pause();

}

songtrack.max = song.duration;

play_button.addEventListener("click", playS);
pause_button.addEventListener("click", playSs);

play_button_two.addEventListener("click", playS);
pause_button_two.addEventListener("click", playSs);

song.addEventListener('timeupdate', function () {
    songtrack.max = song.duration;
    let position = song.currentTime;
    console.log(position);
    songtrack.value = position;
})

songtrack.addEventListener('change', function () {
    song.currentTime = songtrack.value / 1;

})

volumetrack.addEventListener('change', function () {
    console.log(volumetrack.value)
    console.log(volumetrack.value / 100)
    let volumeValue = volumetrack.value / 100
    song.volume = volumeValue;
    console.log("song volume " + song.volume)
})


// Bruegel, Stadler Ernst, Edvard Munch, Die Brücke o Der Blaue Reiter.

let ichi = document.getElementById("ichi");

let firstcontainer = document.getElementById("firstcontainer");

let secondcontainer = document.getElementById("secondcontainer");

secondcontainer.style.display = "none";

let verifier = false;

if (ichi) {
    ichi.addEventListener("click", function () {
        firstcontainer.style.display = "none";
        secondcontainer.style.display = "unset";
        play_button.style.display = "none";
        pause_button.style.display = "unset";
    
        play_button_two.style.display = "none";
        pause_button_two.style.display = "unset";
        verifier = true;
    });
}

let backarrow_two = document.getElementById("back_and_forwad_two_back");
let forwadarrow_two = document.getElementById("back_and_forwad_two_forward");

let backarrow = document.getElementById("back_and_forwad_back");
let forwadarrow = document.getElementById("back_and_forwad_forward");

backarrow_two.addEventListener("click", function() {
    firstcontainer.style.display = "unset";
    secondcontainer.style.display = "none";
    console.log("hola")
});

forwardarrow.addEventListener("click", function() {
    firstcontainer.style.display = "unset";
    secondcontainer.style.display = "none";
    console.log("hola")
});


