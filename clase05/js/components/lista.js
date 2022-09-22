//agrego export dafault para enviar al proyecto

export default class Lista{
    constructor(texto, css_class){
        this.text = texto; 
        this.css_class = css_class;
    }
    /*defino un metodo*/
    render(){


        let myHTML = `<ul>`;
        for (let e of this.text) {
            myHTML += `<li>${e}</li>`;
        }
        myHTML += `</ul>`;
        return myHTML;
    }
}