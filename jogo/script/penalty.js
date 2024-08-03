function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatarNumero(numero, casasDecimais) {
    return numero.toFixed(casasDecimais);
}

function gerarNumeroAleatorioNormalETurbo() {
    const combinacoes = [
        [1, 2],
        [1, 3],
        [2, 3]
    ];

    const indiceAleatorio = Math.floor(Math.random() * combinacoes.length);
    return combinacoes[indiceAleatorio];
}

function obterImagemAleatoria() {
    const imagens = [
        '/jogo/img/penalty1.png',
        '../jogo/img/penalty2.html',
        '../jogo/img/penalty3.html',
        '../jogo/img/penalty4.html',
        '../jogo/img/penalty5.html',
        '../jogo/img/penalty6.html',
        '../jogo/img/penalty7.html'
    ];

    const indiceAleatorio = Math.floor(Math.random() * imagens.length);
    return imagens[indiceAleatorio];
}

function obterTimeAleatorio() {
    const times = [
        'Bélgica',
        'Inglaterra',
        'França',
        'Itália',
        'Portugal',
        'Espanha'
    ];

    const indiceAleatorio = Math.floor(Math.random() * times.length);
    return times[indiceAleatorio];
}

function gerarNovoSinal() {
    const loaderHTML = '<div class="loader"><li class="ball"></li><li class="ball"></li><li class="ball"></li></div>';
    document.getElementById('normal-valor').innerHTML = loaderHTML;
    document.getElementById('turbo-valor').innerHTML = loaderHTML;
    document.getElementById('minuto-valor').innerHTML = loaderHTML;
    document.getElementById('assertividade-valor').innerHTML = loaderHTML;

    const botao = document.getElementById('gerar-sinal');
    botao.textContent = 'ANALISANDO...';

    setTimeout(() => {
        const [valorNormal, valorTurbo] = gerarNumeroAleatorioNormalETurbo();
        document.getElementById('normal-valor').textContent = obterTimeAleatorio(); // Exibe o nome do time aleatório
        document.getElementById('turbo-valor').textContent = `${valorTurbo}`;

        const agora = new Date();
        const minutoPagante = new Date(agora.getTime() + 3 * 60000);
        const horas = String(minutoPagante.getHours()).padStart(2, '0');
        const minutos = String(minutoPagante.getMinutes()).padStart(2, '0');
        document.getElementById('minuto-valor').textContent = `${horas}:${minutos}`;

        const valorAssertividade = formatarNumero(gerarNumeroAleatorio(80, 90) + Math.random(), 2);
        document.getElementById('assertividade-valor').textContent = `${valorAssertividade}%`;

        const imagemAleatoria = obterImagemAleatoria();
        document.getElementById('imagem-aleatoria').src = imagemAleatoria;

        bloquearBotao();
    }, 4000);
}

function bloquearBotao() {
    const botao = document.getElementById('gerar-sinal');
    botao.disabled = true;
    botao.classList.remove('unblocked');
    botao.classList.add('blocked');
    let tempoRestante = 60;

    const intervalo = setInterval(() => {
        if (tempoRestante > 0) {
            tempoRestante--;
            botao.textContent = `AGUARDE (${tempoRestante}s)`;
        } else {
            clearInterval(intervalo);
            desbloquearBotao();
        }
    }, 1000);
}

function desbloquearBotao() {
    const botao = document.getElementById('gerar-sinal');
    botao.disabled = false;
    botao.classList.remove('blocked');
    botao.classList.add('unblocked');
    botao.textContent = 'GERAR NOVO SINAL';
}
