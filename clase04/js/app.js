let myDom = document;

/*defino un objeto en java y le agrego nombre y edad*/
const myDog = {
"name": "firulais",
"age": 5,
"legs": 4
};

/*otra forma de definir un objeto en java y le agrego nombre y edad*/
const myCat = {
    name: "Milo",
    age: 6,
    legs: 4
};


/*consulto con console log el nombre del gato y las patas del perro*/

console.log(myCat.name);
console.log(myDog.legs);


/* tercera forma de crear un objeto a traves de una funcion*/

function Mouse() {
    return "perez";
}

const myMouse = Mouse();

console.log(myMouse);

/* tercera forma de crear un objeto a traves de una funcion con this*/


function Mouse2() {
    this.age = 4;
    this.name = "Perez";
}

const myMouse2 = Mouse2();

console.log(myMouse2);

/*agrego una caracteristica mas a cat*/
myCat.tail = 1;

console.log(myCat)
console.log(myCat.tail)


/*defino un objeto con la palabra class*/
/*me permite crear una plantilla*/

/*esta es la mas adecuada*/

class Mouse3{
    constructor(name3){
        this.name3 = name3;
    }
}

const myMouse3 = new Mouse3("Juan");
console.log(myMouse3);



/*
tarea:
crear objetos usando class de los siguientes componentes:
- video: fuente resolucion o tamaño
- audio: 
- boton: tiene que tener una caracteristica(distinto visual puede ser color forma o tamaño)
- lista de elementos: array de elementos
*/

/* constructor video */
class video{
    constructor(titulo, resolucion, url){
        this.titulo = titulo;
        this.resolucion = resolucion;
        this.url = url;
    }
}



/* constructor audio */
class audio{
    constructor(titulo, extension, url){
        this.titulo = titulo;
        this.extension = extension;
        this.url = url;
    }
}



/* constructor boton */
class boton{
    constructor(color, texto, tamano){
        this.color = color;
        this.texto = texto;
        this.tamano = tamano;
    }
}




/* constructor lista */
class lista{
    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
    }
}




/*defino los valores*/

const myVideo = new video("titulo del video", "1920", "www.youtube.com");
const myAudio = new audio("kiss", "mp3", "youtube.com");
const myButton = new boton("rojo", "aceptar", "10px");
const myLista = new lista("1", "gerente");

console.log(myVideo);
console.log(myAudio);
console.log(myButton);
console.log(myLista);


/*creo el parrafo con los datos*/

const parrafo = document.getElementById("clase04");


/* muestro en el front */

parrafo.innerHTML = `<div class="alert-link">Video:</div>${mostrarEnfront(myVideo)}<div class="alert-link">Audio:</div>${mostrarEnfront(myAudio)}<div class="alert-link">Botón:</div>${mostrarEnfront(myButton)}<div class="alert-link">Lista:</div>${mostrarEnfront(myLista)}`;



function mostrarEnfront(objeto) {
    result = '';
    for (let clave in objeto) result += `${clave}: ${objeto[clave]}\n`
    return result;
}
