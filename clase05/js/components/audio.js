export default class Audio{
    constructor(url, width, height, css_class){
        this.url = url; 
        this.css_class = css_class;
    }
    /*defino un metodo*/
    render(){

        let myHTML = `<audio controls class=${this.css_class}>
                      <source src=${this.url} type="audio/ogg">            
                      </audio>`;

        return myHTML;
    }
}