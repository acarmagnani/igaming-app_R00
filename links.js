// links.js
const links = {
    plataform: "https://go.aff.elisa.bet/pbs688xc",
    kirvano: "https://app.digitalmartbr.com.br/checkout/vbiiuayj",
    menu1: "#",
    menu2: "#",
    menu3: "#",
    menu4: "#",
    footerText: "&copy; 2024 Hack Ninja. <br>All rights reserved.",
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