// Light mode
function light() {
  var element = document.body
  element.classList.toggle("light-mode")
}

// Sobre
function mais(){
  var mudar = document.getElementById("textoSobre")
  mudar.classList.toggle("aparecer")
}

// Typing
const typing = document.querySelector('[data-js="typing"]')

const mensagem = ['Desenvolvedora back-end']

let mensagemIndex = 0
let caractereIndex = 0
let mensagemAtual = ''
let caractereAtual = ''


const type = () =>{
  mensagemAtual = mensagem[0]
  caractereAtual = mensagemAtual.slice(0, caractereIndex++) // se colocar 0, 0 vai aparece "" agora se for 0, 1 aparece "De" de desenvolvedora

  typing.textContent = caractereAtual
}

setInterval(type, 100)