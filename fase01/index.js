const classA = [
  {
    name: "Henrique",
    grade: 10
  },
  {
    name: "Ronaldo",
    grade: 9.8
  },
  {
    name: "Fulano",
    grade: 2
  },
  {
    name: "Mais um aluno",
    grade: 10
  }
]

const classB = [
  {
    name: "Cleiton",
    grade: 10
  },
  {
    name: "Robson",
    grade: 10
  },
  {
    name: "Ciclano",
    grade: 0
  },
  {
    name: "Novo Aluno",
    grade: 5
  }
]

function calculateAverage(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade
  }

  const average = sum / students.length;
  return average
}

function sendMessage(average, turma) {
  if (average > 5) {
    console.log(`${turma} average: ${average.toFixed(2)}. Congrats! `)
  } else {
    console.log(`${turma} average: ${average.toFixed(2)}. Is not good.`)
  }
}

function markAsFlunked(student) {
  student.flunked = false;
  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`${student.name} flunked!`)
  }
}

function studentReprovado(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student);
  }
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, 'Class A');
sendMessage(average2, 'Class B');

studentReprovado(classA);
studentReprovado(classB);