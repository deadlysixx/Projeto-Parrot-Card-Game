let numeroCartas = parseInt(prompt("Com quantas cartas deseja jogar? Números pares de 4 a 14"));
cartasGif = [];
let cartasAbertas = [];
let cartaUm = null;
let CartaDois = null;
let armazenarPares = 0;
let qtdJogadas = 0;
let contador = document.querySelector(".numJogadas");
let idInterval;

function qtdCartas() {
    while ((numeroCartas % 2 !== 0) || (numeroCartas < 4) || (numeroCartas > 14) || (numeroCartas === 0)) {
        numeroCartas = parseInt(prompt("Com quantas cartas deseja jogar? Números pares de 4 a 14"));
    }
    adicionarCartas();
}

qtdCartas();
contar();

function comparador() {
    return Math.random() - 0.5;
}

function adicionarCartas() {
    for (i = 0; i < numeroCartas / 2; i++) {
        cartasGif.push(`assets/${i}.gif`);
    }
    for (i = 0; i < numeroCartas / 2; i++) {
        cartasGif.push(`assets/${i}.gif`);
    }

    cartasGif.sort(comparador);

    for (let x = 0; x < numeroCartas; x++) {

        const incluir = document.querySelector("main");
        incluir.innerHTML = incluir.innerHTML + `
    <div class="cartas selecionada" onclick="selecionarCarta(this)" data-identifier="card">
        <div class="verso face">
            <img src="${cartasGif[x]}" alt="GifsAleatorios" data-identifier="back-face">
        </div>
    </div>
    `
    }
}

function selecionarCarta(opcao) {
    let selecionado = opcao.querySelector(".face");

    if (!selecionado.classList.contains("verso") || cartasAbertas.length >= 2) {
        return;
    }

    selecionado.classList.remove("verso");
    cartasAbertas.push(selecionado);
    qtdJogadas++;
    contador.innerHTML = `Jogadas: ${qtdJogadas}`;

    if (cartasAbertas.length === 2) {
        checarIgualdade();
    }
}

function checarIgualdade() {
    let cartaUm = cartasAbertas[0];
    let cartaDois = cartasAbertas[1];

    if (cartaUm.innerHTML !== cartaDois.innerHTML) {
        setTimeout(function () {
            fecharCartas(cartaUm, cartaDois);
        }, 1000);
    }
    else {
        armazenarPares += 2;
        if (armazenarPares < numeroCartas) {
            cartasAbertas = [];
        } else if (armazenarPares === numeroCartas) {
            setTimeout(fimJogo, 1000);
        }
    }
}

function fecharCartas(cartaUm, cartaDois) {
    cartaUm.classList.add("verso");
    cartaDois.classList.add("verso");
    cartasAbertas = [];
}


function fimJogo() {
    alert(`Fim do jogo! Você ganhou em ${qtdJogadas} jogadas.`);
}
