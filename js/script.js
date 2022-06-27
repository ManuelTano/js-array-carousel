// Array di immagini

const sources = ['img/06.jpg','img/07.jpg','img/08.jpg','img/09.jpg','img/10.jpg'];

const maximage = document.getElementById('carosel');


let imgContent = "";

for (let i = 0; i < sources.length; i++) {

    imgContent += `<img src="${sources[i]}" alt="0${i}"/>`;

    console.log(sources[i]);
}


maximage.innerHTML += imgContent;

const imgElements = document.querySelectorAll('#carosel img');
console.log(imgElements);

let currentActiveIndex = 0;

imgElements[currentActiveIndex].classList.add('active');



