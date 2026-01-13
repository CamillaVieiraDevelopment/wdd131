// 1. Selecionar os elementos para manipulação [cite: 86, 92]
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 2. Adicionar o evento de clique ao botão [cite: 168, 192]
button.addEventListener('click', function () {

    // 3. Verificar se o input não está vazio [cite: 212, 214]
    if (input.value.trim() !== '') {

        // 4. Criar o elemento li e o botão de deletar [cite: 46, 94, 101]
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // 5. Configurar conteúdo e acessibilidade [cite: 104, 133, 140]
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
        deleteButton.classList.add('delete');

        // 6. Adicionar o botão ao li e o li à lista [cite: 50, 123, 127]
        li.append(deleteButton);
        list.append(li);

        // 7. Evento para remover o item da lista ao clicar no X [cite: 58, 222, 225]
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus(); // Retorna o foco após deletar [cite: 226]
        });

        // 8. Limpar o campo e devolver o foco ao input [cite: 231, 237, 240]
        input.value = '';
        input.focus();
    } else {
        // Se estiver vazio, apenas foca no input [cite: 212]
        input.focus();
    }
});