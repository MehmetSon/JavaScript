const todoListArray = [
    {
        name: 'Buy groceries',
        date: '2023-10-02'
    }
];

function displayTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < todoListArray.length; i++) {
        const todoItem = todoListArray[i];
        let html = `
        <div class="todo-item">
            <div>
                <span class="todo-text">${todoItem.name}</span>
                <span class="todo-date">${todoItem.date}</span>
            </div>
            <button onclick="
                todoListArray.splice(${i}, 1);
                displayTodoList();
            " class="todo-delete-btn">Delete</button>
        </div>
        `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-result').innerHTML = todoListHTML;
}



function addTodoList(){
    const todoInputElement = document.querySelector('.js-todo-input');
    const todoInputValue = todoInputElement.value;
    const todoDateElement = document.querySelector('.js-todo-date-input');
    const todoDateValue = todoDateElement.value;
   todoListArray.push({
        name: todoInputValue,
        date: todoDateValue
    });
    console.log(todoListArray);
    todoInputElement.value = '';
    todoDateElement.value = '';
    displayTodoList() ;
}
  displayTodoList();
