// Criar um programa que calcula a média 
// das turmas de alunos e envia
// mensagem do cálculo da média.

const alunosDaTurmaA = [
  {
    nome: "Henrique",
    nota: 10
  },
  {
    nome: "Ronaldo",
    nota: 1.8
  },
  {
    nome: "Fulano",
    nota: 2
  }
]

const alunosDaTurmaB = [
  {
    nome: "Cleiton",
    nota: 10
  },
  {
    nome: "Robson",
    nota: 10
  },
  {
    nome: "Ciclano",
    nota: 0
  }
]

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {
  // Se a média for maior que 5, parabenizar a turma.
  if (media > 5) {
    console.log(`A média da ${turma} foi de ${media.toFixed(2)}, parabéns! `)
  } else {
    console.log(`A média da ${turma} é menor que 5.`)
  }
}


enviaMensagem(media1, 'Turma A')
enviaMensagem(media2, 'Turma B')