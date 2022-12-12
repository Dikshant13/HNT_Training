class myApp extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});

        let span = document.createElement('span');
        let style = this.getAttribute('style');
        let message = this.getAttribute('message');

        span.style=style;
        span.innerText=message;
        span.style="";
        

        this.shadowRoot.appendChild(span);
    }
}

customElements.define("my-app",myApp);


let template = document.getElementById("mytemplate");
let content = template.content;
document.body.appendChild(content);