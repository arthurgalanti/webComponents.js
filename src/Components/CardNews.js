class CardNews extends HTMLElement {
constructor(){
    super();

    const shadow = this.attachShadow({mode: "open"});
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());
}

build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");
    const author = document.createElement("span");
    author.textContent = "By " + (this.getAttribute("author") || "Anonymous");
    cardLeft.appendChild(author);
    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title") || "Sem titulo";
    linkTitle.href = this.getAttribute("link-url");
    cardLeft.appendChild(linkTitle);
    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content") || "Sem conteíudo";
    cardLeft.appendChild(newsContent); 

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card_right");
    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("img") || "/assets/default_image.png";
    newsImage.alt = this.getAttribute("alt");

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
}

style() {
    const style = document.createElement("style");
    style.textContent = `    
    .card{
        width: 70vw;
        display: flex;
        flex-direction: row;
        -webkit-box-shadow: 10px 10px 16px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 16px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 16px 0px rgba(0,0,0,0.75);
        justify-content: space-between;
    }
    
    .card_left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }
    
    .card_left > span {
        font-weight: 400;
        
    }
    
    .card_left > a {
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bold;
    
    }
    
    .card_left > p {
        color: grey;
    }
    
    .card_right > img {
        max-height: 150px;
    }`;

    return style;
}
}

customElements.define('card-news', CardNews)