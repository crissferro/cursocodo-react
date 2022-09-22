/* clase */

/* creo un objeto desde una class*/



/* class Button{
    constructor(texto, css_class){
        this.text = texto; 
        this.css_class = css_class;
    }
    //defino un metodo
    render(){
        // opcion 1
        // let myHTML = "<button>"+this.text+"</button>";

        // opsion 2, uso las comillas con alt 96 
        let myHTML = `<button class=${this.css_class}>${this.text}</button>`

        return myHTML;
    }
}*/

// ahora que movi la class button lo importo desde el componente...


//agrego import desde el boton pero tengo que exportar desde el otro archivo

import Button from "./components/button.js";
import Video from "./components/video.js";
import Lista from "./components/lista.js";
import Audio from "./components/audio.js";
import Input from "./components/input.js";


const myApp = document.getElementById("myApp");



// let myButton = new Button("Signing", "MyButton"); //uso un estilo desde style
let myButton = new Button("Boton 2", "btn tn-outline-primary"); //uso un estilo desde style

myApp.innerHTML = myButton.render();

/* hasta aca con todo esto muestro un elemtno en pantalla*/


let myVideo = new Video("https://www.w3schools.com/tags/movie.mp4", 320,240,"none");

myApp.innerHTML += myVideo.render();

//lista

let myLista = new Lista(["item 1","item 2","item 3","item 4"], "list-group-item" );

myApp.innerHTML += myLista.render();

//audio

let myAudio = new Audio("https://www.w3schools.com/html/horse.ogg", "none");

myApp.innerHTML += myAudio.render();


//input

let myInput = new Input();

myApp.innerHTML += myInput.render();
myInput.evaluate();