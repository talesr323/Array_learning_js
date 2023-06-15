//pegando os dados de todos os botoes
const botoes = document.querySelectorAll('.btn')
//chamando a função filtrarLivros assim que clicar em um botão (usando 'botoes' que contem todos os botoes)  
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    //colocando os id em uma variavel
    const elementoBtn = document.getElementById(this.id)
    //colocando o valor deles em uma variavel
    const categoria = elementoBtn.value
    //posso colocar o livro.categoria == categoria (categoria vai pegar o valor que é 'front-end', 'back-end', 'dados' o que antes teria que ser estatico..)
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    console.table(livrosFiltrados)
}
