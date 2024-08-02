let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let titulo = document.getElementById('titulo');
let categoria = document.getElementById('categoria');

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
    titulo.classList.toggle('dark');
    categoria.classList.toggle('dark');
});
