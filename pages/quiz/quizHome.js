import { trocarTema, verificarTema } from "./helpers/tema-helper.js";

const botaoTema = document.querySelector(".tema button");
const body = document.querySelector("body");

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema);
});

verificarTema(body, botaoTema);

const botoesAssunto = document.querySelectorAll(".assuntos button");
botoesAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto);
});

function selecionarAssunto(evento) {
    const botao = evento.currentTarget;
    const span = botao.querySelector("span");
    if (span) {
        const assunto = span.innerText;
        localStorage.setItem("assunto", assunto);
        window.location.href = "/pages/quiz/pages/quiz/quiz.html";
    } else {
        console.error("Elemento span não encontrado no botão.");
    }
}
