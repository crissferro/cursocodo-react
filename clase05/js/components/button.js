//agrego export dafault para enviar al proyecto

export default class Button{
    constructor(texto, css_class){
        this.text = texto; 
        this.css_class = css_class;
    }
    /*defino un metodo*/
    render(){
        /*opcion 1*/
        // let myHTML = "<button>"+this.text+"</button>";

        /*opsion 2, uso las comillas con alt 96 */
        let myHTML = `<button class=${this.css_class}>${this.text}</button>`

        return myHTML;
    }
}