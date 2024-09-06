const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você já cortou árvores"?
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Sim"
            },
            {
                texto: "Parabéns, você está cuidando do seu meio ambiente"
                afirmacao: "Não"
            }
        ]
    },
    {
        enunciado: "Você consegue separar seu lixo adequadamente"?
        alternativas: [
            {
                texto: "Òtimo, isso ajuda muito"!
                afirmacao: "Sim"
            },
            {
                texto: "Separe seu lixo adequadamente"
                afirmacao: "Não"
            }
        ]
    },
    {
        enunciado: "você acha que a reciclagem é impotante pro meio ambiente?"
        alternativas: [
            {
                texto: "Pois, com a reciclagem conseguimos ajudar o meio ambiente.",
                afirmacao: "Sim"
            },
            {
                texto: "Você está contribuindo á poluição"
                afirmacao: "Não"
            }
        ]
    },
    {
        
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
