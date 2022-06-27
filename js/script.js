// Array di immagini

const sources = ['./img/06.jpg','./img/07.jpg','./img/08.jpg','./img/09.jpg','./img/10.jpg'];

const gallery = document.getElementById('gallery')

const maximage = document.getElementById('carosel');

let imgContent = "";

for (let i = 0; i < sources.length; i++) {

    imgContent += `<div class="gallery"><img src"${sources[i]}" alt="0${i}"}/></div>`;

    console.log(sources[i]);
}


maximage.innerHTML += imgContent;
