const programmer = {
  name: "Henrique",
  age : 19,
  technologies: [
    {name: "Javascript", especialidade: "Web/Mobile"},
    {name: "C++", especialidade: "Desktop"},
    {name: "Python", especialidade: "Data Science"}
  ]
}

console.log(`The user ${programmer.name} is ${programmer.age} years and uses technology
 ${programmer.technologies[0].name} specializing in ${programmer.technologies[0].especialidade}.`);