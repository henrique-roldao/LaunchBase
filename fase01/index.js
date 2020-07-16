// Criar um programa que calcula a média 
// das notas entre os alunos e envia
// mensagem do cálculo da média.

const alunos = [
  {
    nome: "Henrique",
    nota: 10
  },
  {
    nome: "Ronaldo",
    nota: 9.8
  },
  {
    nome: "Fulano",
    nota: 2
  }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;

// Se a média for maior que 5, parabenizar a turma.
if (media > 5) {
  console.log(`A nota foi de ${media.toFixed(2)}. Parabéns! `)
} else {
  console.log(`A média é menor que 5.`)
}
