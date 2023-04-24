// 
const btnTodo = document.getElementById("btn-todo")


// Funções

function mostrar() {
    const imgTodo = document.getElementById("todo-img")
    imgTodo.style.display = "flex"
    imgTodo.style.width = "300px"
    imgTodo.style.zIndex = "9"
    document.getElementById("gallery").style.border = "none"
    document.getElementById("text-in-gallery").style.display = "none"
} 

document.getElementById("todo-img").addEventListener('click', function() {
    window.open("pages/to-do-list", "_blank")
})
