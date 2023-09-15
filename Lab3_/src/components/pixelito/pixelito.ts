export enum Attribute{
    "backgorund" = "background"
}

class Card extends HTMLElement{
    background?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            background: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:Attribute, oldValue:string | undefined, newValue:string | undefined,){
        switch(propName){
            default:
            this[propName] = newValue;
            break;
        }

        this.render();
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.render();
        }

        connectedCallback(){
            this.render();
        }

        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./index.css">
                <div class="${this.background}"></div>
                `
            }
        }

    }

customElements.define("my-div",Card);
export default Card;