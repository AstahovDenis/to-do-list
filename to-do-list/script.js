const inputField = document.getElementById('input-field');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');
const deleteTask = document.getElementById('delete-button');

addButton.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.textContent = inputField.value;
    taskList.appendChild(newTask);
    inputField.value = '';
});

deleteTask.addEventListener('click', () => {
    const lastTask = taskList.lastElementChild;
    if (lastTask) {
        lastTask.remove();
    } else {
        alert('No tasks to remove');
    }
});