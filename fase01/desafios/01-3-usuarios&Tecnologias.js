const usuarios = [
  {nome: "Henrique", tecnologias: ["HTML", "CSS"]},
  {nome: "Carlos", tecnologias: ["Javascript", "CSS"]},
  {nome: "Paula", tecnologias: ["HTML", "NodeJs"]},
  {nome: "Maria", tecnologias: ["Designer", "UX", "CSS"]}
]

for (let usuario of usuarios) {
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

// Busca por Tecnologia

function checarUsuarioUsaCSS(usuario) {
  for(let tecnologia of usuario.tecnologias) {
    if (tecnologia == 'CSS') return true
  }
  
  return false
}

for(let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checarUsuarioUsaCSS(usuarios[i])

  if(usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}