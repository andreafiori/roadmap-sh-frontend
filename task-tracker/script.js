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
            taskDescription.textContent = task.description;

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.org/2000/svg"><path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => this.deleteTask(this.tasks.indexOf(task)));

            taskItem.appendChild(checkbox);
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
