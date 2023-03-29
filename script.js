const form = document.querySelector('#form');
const list = document.querySelector('#list');
const input =document.querySelector('#input');
const submitButton = document.querySelector('#submit');

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    // Предотвращаем поведение по умолчанию, 
    // а именно перезагрузку страницы
    event.preventDefault();
    // Ссылка на форму
    const formElement = event.target;

    // Ссылка на текстовое поле
    const inputElement = formElement.text;

    // Название будущей задачи
    const todoName = inputElement.value;

    // Создание новой задачи
    const newTodo = document.createElement('div');
    newTodo.classList.add('todo')
    newTodo.innerHTML = `
        <div>
            <span>${todoName}</span>
            <button>Удалить</button>
            <button class ="edit-btn">Редактировать </button>
        </div>
    `;

    list.appendChild(newTodo);
    console.log(Array.from(listchildren).find(el => el === newTodo));
    task.addEventListener('click', (e) => {
        const isDeleteButton = e.target.classList.toString() === 'delete-btn';
        const isEditButton = e.target.classList.toString() === 'edit-btn';

        if (isDeleteButton) onTaskDelete(task);

        if (isEditButton) onTaskEdit(task);

        // Очистка текстового поля после
        inputElement.value = '';
    })
}

function onTaskDelete(task) {
    task.remove();

}

function onTaskEdit(task) {
    const newTodoName = prompt('Ведите новое название задачи');
    if (newTodoName.length > 3 && newTodoName.length < 20) {

        if (isValid) {
            const span = task.querySelector('.todo-name');
            span.innerHTML = newTodoName
        } else alert('Длинна названия должна быть больше 3 и меньше 20')
    }
};