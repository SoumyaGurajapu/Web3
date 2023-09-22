// Get references to the necessary elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Function to create a new list item
function createTodoItem(taskText) {
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  });

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  listItem.appendChild(checkbox);
  listItem.appendChild(taskSpan);

  return listItem;
}

// Add event listener to the add button
addButton.addEventListener('click', () => {
  const taskText = todoInput.value.trim();

  if (taskText !== '') {
    // Create a new list item and append it to the to-do list
    const listItem = createTodoItem(taskText);
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = '';
  }
});