
// Funções

function mostrar1() {
    
    var galleryDiv = document.getElementById("gallery")

    const imgTodo = document.getElementById("todo-img")
    const imgTime = document.getElementById("time-img")
    const imgCube = document.getElementById("cube-img")
    const imgLogin = document.getElementById("login-img")
    const imgSpotify = document.getElementById("spotify-img")

    imgCube.style.display = "none"
    imgLogin.style.display = "none"
    imgSpotify.style.display = "none"
    imgTime.style.display = "none"

    imgTodo.style.display = "flex"
    imgTodo.style.width = "300px"
    imgTodo.style.zIndex = "9"
    galleryDiv.style.border = "none"
    document.getElementById("text-in-gallery").style.display = "none"

    let paragrafo = document.createElement("p")
    let text = document.createTextNode("Projeto Todo List")

    paragrafo.appendChild(text)
    galleryDiv.appendChild(paragrafo)

    let existeParagrafo = document.querySelector("p")
    if(existeParagrafo){
        existeParagrafo.parentNode.removeChild(existeParagrafo)
    }
    
    paragrafo.style.margin = "45px auto"
    
} 

function mostrar2() {

    var galleryDiv = document.getElementById("gallery")

    const imgTodo = document.getElementById("todo-img")
    const imgTime = document.getElementById("time-img")
    const imgCube = document.getElementById("cube-img")
    const imgLogin = document.getElementById("login-img")
    const imgSpotify = document.getElementById("spotify-img")

    imgCube.style.display = "none"
    imgLogin.style.display = "none"
    imgSpotify.style.display = "none"
    imgTodo.style.display = "none"

    imgTime.style.display = "flex"
    imgTime.style.width = "300px"
    imgTime.style.zIndex = "9"
    galleryDiv.style.border = "none"
    document.getElementById("text-in-gallery").style.display = "none"

    let existeParagrafo = document.querySelector("p")
    if(existeParagrafo){
        existeParagrafo.parentNode.removeChild(existeParagrafo)
    }

    let paragrafo = document.createElement("p")
    let text = document.createTextNode("Projeto Relógio em HTML/CSS/JS")

    paragrafo.appendChild(text)
    galleryDiv.appendChild(paragrafo)

    paragrafo.style.margin = "45px auto"
    
} 

function mostrar3() {

    var galleryDiv = document.getElementById("gallery")

    const imgTodo = document.getElementById("todo-img")
    const imgTime = document.getElementById("time-img")
    const imgCube = document.getElementById("cube-img")
    const imgLogin = document.getElementById("login-img")
    const imgSpotify = document.getElementById("spotify-img")

    imgTime.style.display = "none"
    imgLogin.style.display = "none"
    imgSpotify.style.display = "none"
    imgTodo.style.display = "none"

    imgCube.style.display = "flex"
    imgCube.style.width = "300px"
    imgCube.style.zIndex = "9"
    galleryDiv.style.border = "none"
    document.getElementById("text-in-gallery").style.display = "none"

    
    let paragrafo = document.createElement("p")
    let text = document.createTextNode("Projeto Cubo em CSS")

    paragrafo.appendChild(text)
    galleryDiv.appendChild(paragrafo)

    let existeParagrafo = document.querySelector("p")
    if(existeParagrafo){
        existeParagrafo.parentNode.removeChild(existeParagrafo)
    }

    paragrafo.style.margin = "45px auto"
} 

function mostrar4() {

    var galleryDiv = document.getElementById("gallery")

    const imgTodo = document.getElementById("todo-img")
    const imgTime = document.getElementById("time-img")
    const imgCube = document.getElementById("cube-img")
    const imgLogin = document.getElementById("login-img")
    const imgSpotify = document.getElementById("spotify-img")

    imgCube.style.display = "none"
    imgTime.style.display = "none"
    imgSpotify.style.display = "none"
    imgTodo.style.display = "none"

    imgLogin.style.display = "flex"
    imgLogin.style.width = "300px"
    imgLogin.style.zIndex = "9"
    galleryDiv.style.border = "none"
    document.getElementById("text-in-gallery").style.display = "none"

    let existeParagrafo = document.querySelector("p")
    if(existeParagrafo){
        existeParagrafo.parentNode.removeChild(existeParagrafo)
    }

    let paragrafo = document.createElement("p")
    let text = document.createTextNode("Projeto tela de Login Responsivo")

    paragrafo.appendChild(text)
    galleryDiv.appendChild(paragrafo)

    paragrafo.style.margin = "45px auto"
    
} 

function mostrar5() {

    var galleryDiv = document.getElementById("gallery")

    const imgTodo = document.getElementById("todo-img")
    const imgTime = document.getElementById("time-img")
    const imgCube = document.getElementById("cube-img")
    const imgLogin = document.getElementById("login-img")
    const imgSpotify = document.getElementById("spotify-img")

    imgCube.style.display = "none"
    imgLogin.style.display = "none"
    imgTime.style.display = "none"
    imgTodo.style.display = "none"

    imgSpotify.style.display = "flex"
    imgSpotify.style.width = "300px"
    imgSpotify.style.zIndex = "9"
    galleryDiv.style.border = "none"
    document.getElementById("text-in-gallery").style.display = "none"

    let existeParagrafo = document.querySelector("p")
    if(existeParagrafo){
        existeParagrafo.parentNode.removeChild(existeParagrafo)
    }

    let paragrafo = document.createElement("p")
    let text = document.createTextNode("Projeto Página do Spotify")

    paragrafo.appendChild(text)
    galleryDiv.appendChild(paragrafo)
    

    paragrafo.style.margin = "45px auto"
} 






