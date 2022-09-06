const myDoc = document;

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