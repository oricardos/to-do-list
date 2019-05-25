var listElement = document.querySelector('#app ul');//busca a lista dentro da div com id app
var inputElement = document.querySelector('#app input');//busca o input dentro da div com id app
var btnElement = document.querySelector('#app button');//busca o botão dentro da div com id app

//ARMAZENANDO OS TODOS DENTRO DO JS
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');//cria os li's 

        todoElement.setAttribute('style', 'list-style: none;')

        var todoText = document.createTextNode(todo);//cria o texto dentro dos li's

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');//cria o href e o endereço
        linkElement.setAttribute('class', 'btn btn-danger');
        linkElement.setAttribute('style', 'margin-left: 20px; margin-top: 10px');
        var linkText = document.createTextNode(' Excluir');//cria a palavra do link

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}
renderTodos(); 

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

btnElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}