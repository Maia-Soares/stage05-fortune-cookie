//Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const cookieClosed = document.querySelector('#cookieClosed')
const luckyMessage = document.querySelector('.luckCard')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
const messagesList = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
]

//Eventos
cookieClosed.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  } else {
    handleClick()
  }
})

// Funções
function handleClick() {
  toggleScreen()

  screen2.querySelector('.luckCard').innerText = messagesList[randomNumber]
}

function handleResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
