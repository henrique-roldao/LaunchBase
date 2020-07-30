const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
  const about = {
    avatar_url: "https://avatars3.githubusercontent.com/u/45341021?s=460&u=fc612577b0df937ae35058b6ee84e0aecd97de59&v=4",
    name: "Henrique Boff Roldão",
    role: "Tutor Educa Digital | Monteiro Lobato",
    description: 'Programador iniciante, focado em aprender.<br> Estudante de análise e desenvolvimento de sistemas <a href="https://www.ulbra.br/">ULBRA - Torres</a>',
    links: [
      {name: "Github", url: "https://github.com/henrique-roldao"},
      {name: "Twitter", url: "https://twitter.com/rique_roldao"},
      {name: "Linkedin", url: "https://www.linkedin.com/in/henrique-rold%C3%A3o-2795191a2/"},
    ]
  }


  return res.render("about", { about: about })
})


server.get("/portfolio", function(req, res) {
  return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res) {
  const id = req.query.id
  
  const video = videos.find(function(video) {
    return video.id == id
  })
  if (!video) {
    return res.send("Video not found!")
  }
  
  return res.render("video", { item: video })
})

server.listen(5000, function() {
  console.log("Server is running")
})