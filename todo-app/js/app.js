// Task Management System with Local Storage
class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.render();
        this.updateStats();
    }

    // Load tasks from localStorage
    loadTasks() {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    }

    // Save tasks to localStorage
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    // Add new task
    addTask(title, priority = 'medium') {
        if (!title.trim()) {
            alert('Please enter a task!');
            return;
        }

        const task = {
            id: Date.now(),
            title: title.trim(),
            priority: priority,
            completed: false,
            createdAt: new Date().toISOString(),
            dueDate: null,
            tags: []
        };

        this.tasks.unshift(task);
        this.saveTasks();
        this.render();
        this.updateStats();
        this.clearInputs();
    }

    // Delete task
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.render();
        this.updateStats();
    }

    // Toggle task completion
    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.render();
            this.updateStats();
        }
    }

    // Edit task
    editTask(id, newTitle) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.title = newTitle.trim();
            this.saveTasks();
            this.render();
        }
    }

    // Change task priority
    changePriority(id, newPriority) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.priority = newPriority;
            this.saveTasks();
            this.render();
        }
    }

    // Filter tasks
    getFilteredTasks() {
        switch(this.currentFilter) {
            case 'active':
                return this.tasks.filter(t => !t.completed);
            case 'completed':
                return this.tasks.filter(t => t.completed);
            case 'high':
                return this.tasks.filter(t => t.priority === 'high');
            case 'all':
            default:
                return this.tasks;
        }
    }

    // Update statistics
    updateStats() {
        const total = this.tasks.length;
        const active = this.tasks.filter(t => !t.completed).length;
        const completed = this.tasks.filter(t => t.completed).length;

        document.getElementById('totalCount').textContent = total;
        document.getElementById('activeCount').textContent = active;
        document.getElementById('completedCount').textContent = completed;
    }

    // Clear inputs
    clearInputs() {
        document.getElementById('taskInput').value = '';
        document.getElementById('prioritySelect').value = 'medium';
        document.getElementById('taskInput').focus();
    }

    // Render tasks
    render() {
        const tasksList = document.getElementById('tasksList');
        const emptyState = document.getElementById('emptyState');
        const filteredTasks = this.getFilteredTasks();

        if (filteredTasks.length === 0) {
            tasksList.innerHTML = '';
            emptyState.style.display = 'block';
            return;
        }

        emptyState.style.display = 'none';
        tasksList.innerHTML = filteredTasks.map(task => this.createTaskElement(task)).join('');

        // Attach event listeners
        filteredTasks.forEach(task => {
            const checkbox = document.querySelector(`#task-${task.id} input[type="checkbox"]`);
            const deleteBtn = document.querySelector(`#task-${task.id} .delete-btn`);
            const editBtn = document.querySelector(`#task-${task.id} .edit-btn`);
            const prioritySelect = document.querySelector(`#task-${task.id} .priority-select`);
            const taskTitle = document.querySelector(`#task-${task.id} .task-title`);

            if (checkbox) checkbox.addEventListener('change', () => taskManager.toggleTask(task.id));
            if (deleteBtn) deleteBtn.addEventListener('click', () => taskManager.deleteTask(task.id));
            if (editBtn) editBtn.addEventListener('click', () => {
                const newTitle = prompt('Edit task:', task.title);
                if (newTitle) taskManager.editTask(task.id, newTitle);
            });
            if (prioritySelect) prioritySelect.addEventListener('change', (e) => taskManager.changePriority(task.id, e.target.value));
        });
    }

    // Create task element HTML
    createTaskElement(task) {
        const createdDate = new Date(task.createdAt).toLocaleDateString();
        const priorityIcons = {
            high: '🔴',
            medium: '🟠',
            low: '🟢'
        };

        return `
            <div id="task-${task.id}" class="task-item flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition priority-${task.priority}" data-id="${task.id}">
                <input 
                    type="checkbox" 
                    ${task.completed ? 'checked' : ''}
                    class="flex-shrink-0"
                >
                <div class="flex-1">
                    <p class="task-title font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}">
                        ${this.escapeHtml(task.title)}
                    </p>
                    <p class="text-xs text-gray-500 mt-1">Created: ${createdDate}</p>
                </div>
                <div class="flex items-center gap-2">
                    <select class="priority-select px-2 py-1 text-xs border border-gray-300 rounded bg-white">
                        <option value="low" ${task.priority === 'low' ? 'selected' : ''}>Low</option>
                        <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>Medium</option>
                        <option value="high" ${task.priority === 'high' ? 'selected' : ''}>High</option>
                    </select>
                    <button class="edit-btn text-blue-600 hover:text-blue-800 px-2 py-1 text-sm">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-btn text-red-600 hover:text-red-800 px-2 py-1 text-sm">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // Escape HTML for security
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize task manager
let taskManager;

window.addEventListener('DOMContentLoaded', () => {
    taskManager = new TaskManager();
});

// Global functions for HTML event handlers
function addTask() {
    const input = document.getElementById('taskInput');
    const priority = document.getElementById('prioritySelect').value;
    taskManager.addTask(input.value, priority);
}

function filterTasks(filter) {
    taskManager.currentFilter = filter;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
    
    taskManager.render();
}

function clearCompleted() {
    if (confirm('Are you sure you want to delete all completed tasks?')) {
        taskManager.tasks = taskManager.tasks.filter(t => !t.completed);
        taskManager.saveTasks();
        taskManager.render();
        taskManager.updateStats();
    }
}

function exportTasks() {
    const dataStr = JSON.stringify(taskManager.tasks, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tasks_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}
