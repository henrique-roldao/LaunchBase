// Criar um programa que calcula a média 
// das notas entre os alunos e envia
// mensagem do cálculo da média.

const aluno01 = {
  nome: "Henrique",
  nota: 9.8
}

const aluno02 = {
  nome: "Ronaldo",
  nota: 10
}

const aluno03 = {
  nome: "Fulano",
  nota: 2
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3;

// Se a média for maior que 5, parabenizar a turma.
if (media > 5) {
  console.log(`A nota foi de ${media.toFixed(2)}. Parabéns! `)
} else {
  console.log(`A média é menor que 5.`)
}
