class TaskManager {
    constructor() {
        this.tasks = [];
        this.taskInput = document.getElementById('taskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.taskList = document.getElementById('taskList');

        this.addTaskBtn.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });
    }

    addTask() {
        const taskDescription = this.taskInput.value.trim();
        if (taskDescription !== '') {
            this.tasks.push({
                description: taskDescription,
                completed: false
            });
            this.taskInput.value = '';
            this.renderTasks();
        }
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.renderTasks();
    }

    toggleTaskStatus(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.renderTasks();
    }

    renderTasks() {
        this.taskList.innerHTML = '';
        const sortedTasks = [...this.tasks].sort((a, b) => a.completed - b.completed);

        sortedTasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            if (task.completed) taskItem.classList.add('completed');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'task_' + index;
            checkbox.checked = task.completed;
            checkbox.classList.add('checkbox');
            checkbox.addEventListener('change', () => this.toggleTaskStatus(this.tasks.indexOf(task)));

            const taskDescription = document.createElement('label');
            taskDescription.setAttribute('for', 'task_' + index);
            taskDescription.setAttribute('class', 'checkbox-container');
            taskDescription.textContent = task.description;
            taskDescription.appendChild(checkbox);
            taskDescription.appendChild(document.createElement('span')).classList.add('checkmark');

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => this.deleteTask(this.tasks.indexOf(task)));

            taskItem.appendChild(taskDescription);
            taskItem.appendChild(deleteBtn);

            this.taskList.appendChild(taskItem);
        });
    }
}

// Initialize the TaskManager when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TaskManager();
});
