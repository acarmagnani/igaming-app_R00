const links = {
    plataform: "https://go.aff.elisa.bet/pbs688xc",
    kirvano: "#",
    menu1: "#",
    menu2: "#",
    menu3: "#",
    menu4: "https://chat.whatsapp.com/JKkVmYneL4TB3FDk8Gknme",
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

    // Update the button to open the link in a new tab
    const button = document.getElementById('link-plataforma');
    if (button) {
        button.onclick = function() {
            window.open(links.plataform, '_blank');
        };
    }

    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = links.footerText;
    }
}

window.onload = updateElements;
