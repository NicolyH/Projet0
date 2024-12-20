function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        // se tiver light mode, adicionar a img light
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // se tiver sem mode light, imagem permanece normal
        img.setAttribute("src", "./assets/avatar.png")
    }
}