/*
  Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:
    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

  Depois de criada a lista:
    - Crie uma função que irá calcular a média das notas de cada aluno;
    - Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

// Array of students containing their data
const lisOfStudents = [
  {
    name: 'João',
    firstTest: 9,
    secondTest: 10,
  },
  {
    name: 'Maria',
    firstTest: 7,
    secondTest: 7,
  },
  {
    name: 'Fernando',
    firstTest: 7,
    secondTest: 5,
  },
]

// Function to calculate the average of student grades
function average(firstTest, secondTest) {
  return ((firstTest + secondTest) / 2).toFixed(2)
}

// function to display a message with average of students
function printMessage(student) {
  return `
    A média do(a) aluno(a) ${student.name} foi: ${average(student.firstTest, student.secondTest)}
  `
}

// Function to display a message saying if the student passed the contest
function contestAverage(student) {
  let avg = average(student.firstTest, student.secondTest); // Calculates the average of the student's tests

 let checkAverage = avg >= 7? `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!` : `Não foi dessa vez, ${student.name}! Tente novamente!`
 return checkAverage
}

// repeat structure to show all students with their average
for(let student of lisOfStudents) {
  let averageMessage = printMessage(student)
  let msgContest = contestAverage(student)

  alert(`
    ${averageMessage} 
    ${msgContest}
  `)
}