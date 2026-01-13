// 1. Selecione os elementos fora do evento para eficiência
const input = document.querySelector('#favchap');
const button = document.querySelector('button'); // ou o seletor específico do seu botão de adicionar
const list = document.querySelector('ul'); // Substitua 'ul' pelo ID ou classe da sua lista

button.addEventListener('click', function () {
    // 2. Verifique se o valor não está vazio (usando trim para ignorar espaços)
    if (input.value.trim() !== '') {

        // 3. Crie os elementos necessários
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // 4. Configure o conteúdo e acessibilidade
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`); // Boa prática de acessibilidade

        // 5. Monte o item da lista
        li.append(deleteButton);
        list.append(li);

        // 6. Adicione a funcionalidade de deletar ao botão recém-criado
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus(); // Retorna o foco para o input após deletar
        });

        // 7. Limpe o campo e devolva o foco
        input.value = '';
        input.focus();
    } else {
        // Opcional: focar no input se o usuário tentar adicionar algo vazio
        input.focus();
    }
    // 8. Removendo

});