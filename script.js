function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img > substituir a imagem
  // msm seletor cc, #profile
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
       img.setAttribute("src", "./assets/avatar.png")
  }
}
// propriedades da list se contem - a lista de classes contém o light
//  if (html.classList.contains("light")) {
//    html.classList.remove("light")
//  } else {
//    html.classList.add("light")
//  }
//}

// se tiver light mode, adicionar a imagem light
// sem light mode, manter imagem normal
