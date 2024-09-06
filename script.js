const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre uma nova tecnologia que pode reduzir significativamente a emissão de poluentes. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "É uma grande oportunidade para salvar o planeta! Devemos adotar imediatamente.",
                afirmacao: "Você vê a tecnologia como uma solução crucial para a crise ambiental e deseja implementá-la o mais rápido possível."
            },
            {
                texto: "Precisamos analisar os possíveis impactos e fazer testes antes de qualquer adoção em larga escala.",
                afirmacao: "Você é cauteloso e acredita que é necessário um estudo detalhado para evitar consequências imprevistas."
            }
        ]
    },
    {
        enunciado: "Uma nova política global para a preservação dos oceanos está sendo debatida. Como você participa desse processo?",
        alternativas: [
            {
                texto: "Organizo uma campanha para promover a política e envolver a comunidade local.",
                afirmacao: "Você acredita na importância da conscientização pública e deseja mobilizar as pessoas para apoiar a política."
            },
            {
                texto: "Concentro-me em desenvolver tecnologias inovadoras que possam ser usadas para proteger os oceanos.",
                afirmacao: "Você prefere focar em soluções tecnológicas para enfrentar os desafios ambientais de maneira prática."
            }
        ]
    },
    {
        enunciado: "Durante uma cúpula sobre mudanças climáticas, você é solicitado a apresentar soluções para mitigar os efeitos do aquecimento global. O que você faz?",
        alternativas: [
            {
                texto: "Proponho a implementação de energias renováveis em larga escala e o desenvolvimento de políticas para reduzir a pegada de carbono.",
                afirmacao: "Você se concentra em soluções amplas e sustentáveis para enfrentar as mudanças climáticas de forma eficaz."
            },
            {
                texto: "Sugiro iniciativas locais e projetos comunitários que podem ser mais rapidamente implementados e adaptados às necessidades específicas.",
                afirmacao: "Você acredita que mudanças eficazes podem começar em nível local e se expandir para ter um impacto global."
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma proposta de projeto para promover a sustentabilidade em sua cidade. Como você aborda a tarefa?",
        alternativas: [
            {
                texto: "Desenvolvo um plano abrangente que inclui educação ambiental, incentivos para práticas sustentáveis e melhorias na infraestrutura.",
                afirmacao: "Você acredita em uma abordagem integrada para promover a sustentabilidade e alcançar resultados duradouros."
            },
            {
                texto: "Concentro-me em uma solução inovadora, como uma nova tecnologia verde, que pode ser um modelo para outras cidades.",
                afirmacao: "Você prefere focar em uma inovação que pode se destacar e inspirar outras cidades a adotar práticas semelhantes."
            }
        ]
    },
    {
        enunciado: "Seu governo está considerando cortar o orçamento para programas ambientais. Qual é a sua reação?",
        alternativas: [
            {
                texto: "Faço lobby para que o orçamento seja mantido ou aumentado, destacando a importância desses programas para a saúde do planeta.",
                afirmacao: "Você está comprometido em garantir que os esforços para proteger o meio ambiente não sejam prejudicados por cortes orçamentários."
            },
            {
                texto: "Proponho alternativas de financiamento, como parcerias com empresas privadas e campanhas de arrecadação de fundos.",
                afirmacao: "Você busca soluções alternativas para garantir a continuidade dos programas ambientais sem depender exclusivamente do orçamento governamental."
            }
        ]
    },
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
    caixaPerguntas.textContent = "O futuro do planeta está agora nas suas mãos...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();