let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let titulo = document.querySelector('titulo')
let categoria = document.querySelector('dark')


trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    titulo.ClassList.toggle('dark')
    categoria.classList.toggle('dark')
})
