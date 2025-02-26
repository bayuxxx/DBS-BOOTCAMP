// Store tasks in localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

// DOM Elements
const taskForm = document.querySelector('.input-section');
const taskInput = document.getElementById('taskInput');
const dateInput = document.getElementById('dateInput');
const taskList = document.getElementById('taskList');
const filterButtons = document.querySelector('.filters');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Set current date and time as minimum datetime for input
    const now = new Date().toISOString().slice(0, 16);
    dateInput.min = now;
    
    // Initial render
    renderTasks();
    
    // Add task form submission
    taskForm.addEventListener('submit', handleAddTask);
    
    // Filter buttons
    filterButtons.addEventListener('click', handleFilter);
    
    // Task list delegation for complete and delete actions
    taskList.addEventListener('click', handleTaskActions);
});

// Handle form submission
function handleAddTask(e) {
    e.preventDefault();
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    if (dateInput.value === '') {
        alert('Please select a date and time!');
        return;
    }

    const task = {
        id: Date.now(),
        title: taskInput.value,
        date: dateInput.value,
        completed: false,
        createdAt: new Date().toISOString(),
        createdBy: 'bayuxxx' // Using the current user's login
    };

    tasks.push(task);
    saveTasks();
    renderTasks();
    
    taskInput.value = '';
    dateInput.value = '';
}

// Handle filter clicks
function handleFilter(e) {
    const filterButton = e.target.closest('button');
    if (!filterButton) return;

    const filter = filterButton.dataset.filter || 'all';
    currentFilter = filter;

    // Update active state of filter buttons
    filterButtons.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('active');
    });
    filterButton.classList.add('active');

    renderTasks();
}

// Handle task actions (complete/delete)
function handleTaskActions(e) {
    const button = e.target.closest('button');
    if (!button) return;

    const taskItem = button.closest('.task-item');
    const taskId = parseInt(taskItem.dataset.id);

    if (button.classList.contains('complete-btn')) {
        toggleComplete(taskId);
    } else if (button.classList.contains('delete-btn')) {
        deleteTask(taskId);
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

function toggleComplete(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function renderTasks() {
    taskList.innerHTML = '';

    let filteredTasks = tasks;
    if (currentFilter === 'pending') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    }

    filteredTasks.sort((a, b) => new Date(a.date) - new Date(b.date));

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.dataset.id = task.id;
        
        li.innerHTML = `
            <div class="task-content">
                <div class="task-title">${task.title}</div>
                <div class="task-date">Due: ${formatDate(task.date)}</div>
                <div class="task-meta">
                    Created by: ${task.createdBy}
                    <br>
                    Created at: ${formatDate(task.createdAt)}
                </div>
            </div>
            <div class="task-actions">
                <button class="complete-btn">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        
        taskList.appendChild(li);
    });
}