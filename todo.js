// REFERENCIANDO ELEMENTOS

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// ARMAZENANDO OS TODOS

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// RENDERIZANDO OS TODOS NA LISTA

function renderTodos() {
    listElement.innerHTML = '';


    for (todo of todos) {
        var todoElement = document.createElement('li'); // Criando li's
        var todoText = document.createTextNode(todo); // criando o texto do todo 

        var linkElement = document.createElement('a'); // CRIA LINK DE EXCLUSÃO

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')

        var linkText = document.createTextNode('Excluir'); // CRIA TEXTO DO LINK

        linkElement.appendChild(linkText);// ADICIONA O TEXTO NO LINK

        todoElement.appendChild(todoText); //Adicionando o texto na li
        todoElement.appendChild(linkElement); //Adicionando o texto na li

        listElement.appendChild(todoElement); // Adicionando li na ul
    }
    
}

renderTodos();

// ADICIONANDO TODOS NA LISTA
function addTodo() {
    var todoText = inputElement.value;// RECUPERA O VALOR DO INPUT

    todos.push(todoText);// ADICIONA O TEXTO NO ARRAY
    inputElement.value = ''; //APAGA O TEXTO ATUAL DO INPUT
    renderTodos();
    saveToStorage();    
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() { // SALVANDO TODO NO LOCALSTORAGE 
    localStorage.setItem('list_todos', JSON.stringify(todos));
}