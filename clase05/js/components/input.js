//agrego export dafault para enviar al proyecto

export default class Input{
    constructor(width){
        this.width = width; 

    }
    /*defino un metodo*/
    render(){

        let myHTML = `<form>
        <p> Ingrese la respuesta correcta: </p>
        <label for = "suma">4 + 5 = </label>
        <input type="text" id="suma" name="suma"><span id="chackIcon" hidden> </span>
        </form>`;

        return myHTML;
    }
    evaluate(){
        let valor = document.getElementById("suma");
        valor.addEventListener("keyup", (e) => {
            parseInt(valor.value) == 9 ? (valor.style.backgroundColor = "yellow" , document.getElementById("checkIcon").removeAttribute("hidden")) : (valor.style.backgroundColor = "red", document.getElementById("checkIcon").setAttribute("hidden", true));

        })
    }
}