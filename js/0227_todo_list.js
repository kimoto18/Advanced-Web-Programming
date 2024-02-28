const todo_list = [];

renderTodoList();

function renderTodoList() {
    let todo_list_html = '';

    for(let i = 0; i < todo_list.length; i++) {
        const todo_object = todo_list[i];
        const {name, due_date} = todo_object;
        const html = `
            <div>${name}</div>
            <div>${due_date}</div>
            <button onclick="
                todo_list.splice(${i}, 1) 
                renderTodoList();
            " class = "delete-todo-button" >Delete</button>
        `;

        todo_list_html = todo_list_html + html;
    }

    document.querySelector('.js-todo-list_items').innerHTML = todo_list_html;
}

function addTodo() {
    const input_elem = document.querySelector('.js-todo-name');
    const name = input_elem.value;
    //console.log(name);

    const date_elem = document.querySelector('.js-due-date')
    const due_date = date_elem.value;
    //console.log(due_date);

    todo_list.push({
        name, //name: name
        due_date //due_date: due_date
    })

    input_elem.value = '';
    date_elem.value = '';

    renderTodoList();
    //console.log(todo_list);
}