// links.js
const links = {
    plataform: "https://afiliados.startbet.io/visit/?bta=45238&brand=startbet",
    kirvano: "https://app.digitalmartbr.com.br/checkout/vbiiuayj",
    menu1: "#",
    menu2: "https://www.instagram.com/fpexpertt/",
    menu3: "https://app.digitalmartbr.com.br/checkout/vbiiuayj",
    menu4: "#",
    footerText: "&copy; 2024 Obata Group. <br>All rights reserved.",
    sectionLink: "#"
};

function updateElements() {
    for (const id in links) {
        const element = document.getElementById(id);
        if (element) {
            if (element.tagName === 'IFRAME') {
                element.src = links[id];
            } else if (element.tagName === 'A') {
                element.href = links[id];
            }
        }
    }
    
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = links.footerText;
    }
}

window.onload = updateElements;