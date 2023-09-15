import * as component from "./components/IndexHijo"
import { objectWithImages } from "./data/data"
import Card, {Attribute} from "./components/pixelito/pixelito"

class AppContainer extends HTMLElement{
    divcolor: any = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});


        objectWithImages.forEach((image) =>{
                const divImage = this.ownerDocument.createElement("div");

            image.forEach((line) =>{
                const divLine = this.ownerDocument.createElement("div");

            line.forEach( (item)=>{
                const divItem = this.ownerDocument.createElement("my-div");

                if(item === 0){
                    divItem.setAttribute(Attribute.backgorund, "white");
                 }else{
                    divItem.setAttribute(Attribute.backgorund, "black");
                };
                divLine.appendChild(divItem)}
        )
        divImage.appendChild(divLine)
        }
        )
        this.divcolor.push(divImage)
        })
    }

    connectedCallback(){
        this.render();
    }



    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="padre.css">
            `
            this.divcolor.forEach((div:HTMLDivElement) => {
                this.shadowRoot?.appendChild(div);
            })
        }
    }
}

customElements.define("app-container", AppContainer);
