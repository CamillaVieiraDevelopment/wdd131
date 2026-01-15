// 1. Funcionalidade do Menu Hambúrguer
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    // Alterna a classe 'show' no botão para mudar o ícone (≡ para X)
    menuButton.classList.toggle('show');
    // Alterna a classe 'show' na lista <ul> para mostrar/esconder os itens
    navigation.classList.toggle('show');
});

// 2. Datas do Rodapé (Ano e Última Modificação)
// Seleciona o elemento do ano atual
const yearSpan = document.querySelector('#year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Opcional: Adicionar a data da última modificação
// Como o seu HTML só tem um <span> para o ano, vamos adicionar a data de modificação após o parágrafo
const footerParagraph = document.querySelector('footer p');
const lastModified = document.lastModified;
const modificationText = document.createElement('p');
modificationText.textContent = `Last Modification: ${lastModified}`;
modificationText.style.fontSize = "0.8rem"; // Estilização leve opcional
modificationText.style.marginTop = "0.5rem";
document.querySelector('footer').appendChild(modificationText);