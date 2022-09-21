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


const myApp = document.getElementById("myApp");



// let myButton = new Button("Signing", "MyButton"); //uso un estilo desde style
let myButton = new Button("Boton 2", "btn tn-outline-primary"); //uso un estilo desde style

myApp.innerHTML = myButton.render();

/* hasta aca con todo esto muestro un elemtno en pantalla*/


let myVideo = new Video("https://youtu.be/eBkKPtPEGSI");

myApp.innerHTML += myVideo.render();