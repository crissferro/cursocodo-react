/* const myDoc = document;

console.log(myDoc);

let myH1 = myDoc.getElementsByTagName("h1");

let myH3 = myDoc.getElementById("mySuperH3");


console.log(myH1);
console.log(myH3);

myH3.innerText = "Estoy modificando el texto dentro de h3";

const myButtonStr = "<button> esto es un boton </button>";

myH3.innerHTML = myButtonStr;

const cant_elements = 10;

for (let index = 0; index < cant_elements; index++) {
    myH3.innerHTML = myH3.innerHTML + myButtonStr;
    
}
*/


// codigo ejercicio 3

const myDom = document;
console.log(myDom);

const itemVideos = myDom.getElementById("video");

const myVideo = '<li> <iframe src="https://www.youtube.com/embed/xegy_hW-Mfk?list=PL9LIrEiirmm9kpKuLAjXeu7QVXW8cxut6" title="Clase 04 - Codo a Codo 4 0 Full stack React 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </li>'

let cant_elements = parseInt(prompt("Ingrese la cantidad de elementos que quiere ver"));

for (let i = 1; i <= cant_elements; i++){
    itemVideos.innerHTML += myVideo;

}


