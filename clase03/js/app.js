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

// codigo actividad ejercicio 3

const myBtn=document.getElementById('aceptar');
myBtn.addEventListener('click', obtenerCant);

function obtenerCant() {
    const cant=parseInt(document.getElementById('cantidad').value);
    if(cant>0){
        mySction=document.getElementById('sector');
        const myVideo='<ul class="list-group"><li class="list-group-item list-group-item-warning d-flex justify-content-between align-items-start"><iframe width="1189" height="669" src="https://www.youtube.com/embed/1Xwf6XaT6yU" title="Siempre he usado mesa para el monitor del cockpit. Ahora toca montar y probar un soporte de monitor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <span class="badge bg-primary rounded-pill">Dragon Ball Z Chala Head Chala</span>  </li></ul>' 
        mySction.innerText='';
        for(let i=0; i<cant; i++){
            mySction.innerHTML+=myVideo;
    }
    
}
}
