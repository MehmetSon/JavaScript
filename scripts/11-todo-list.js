const todoList = [{
    name: 'Learn JavaScript',
    date: '2023-10-01'
}];

function displayTodos() {
    let todoHTML = ''
    for(let i = 0;i<todoList.length;i++) {
        const toDoObject = todoList[i];
        const name = toDoObject.name;
        const date = toDoObject.date;
        let html = `
        <div >${name} </div>
        <div > ${date} </div>
        <button onclick="
        todoList.splice(${i},1);
        displayTodos();
        " class="delete-todo-button">Delete
        
        </button>
        
        `;
        todoHTML += html;
}
    document.querySelector('.js-result').innerHTML = todoHTML;

}

function addTodo() {
  const todo = document.querySelector('.js-name-input');
  const name = todo.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({
    name: name,
    date: dueDate
  });
  console.log(todoList);
  todo.value = '';
displayTodos();
}