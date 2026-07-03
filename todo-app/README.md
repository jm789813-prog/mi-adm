# 📝 Advanced To-Do List Application

A modern, feature-rich to-do list application with local storage, priority management, and filtering capabilities.

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Quickly add tasks with a single click or Enter key
- ✅ **Priority Levels** - Set tasks as Low, Medium, or High priority
- ✅ **Mark Complete** - Toggle task completion status
- ✅ **Delete Tasks** - Remove tasks you no longer need
- ✅ **Edit Tasks** - Modify existing task titles
- ✅ **Local Storage** - All tasks automatically saved to browser storage

### Advanced Features
- 🔍 **Smart Filtering**
  - All Tasks
  - Active Tasks (not completed)
  - Completed Tasks
  - High Priority Tasks

- 📊 **Real-time Statistics**
  - Total tasks count
  - Active tasks count
  - Completed tasks count

- 💾 **Data Management**
  - Export tasks as JSON file
  - Clear all completed tasks at once
  - Persistent storage across browser sessions

### User Experience
- 🎨 **Modern Design** - Beautiful gradient interface with Tailwind CSS
- ⚡ **Smooth Animations** - Slide-in and fade effects
- 📱 **Responsive Layout** - Works on desktop, tablet, and mobile
- ♿ **Accessible** - Proper semantic HTML and keyboard support
- 🎯 **Intuitive Interface** - Color-coded priorities with icons

## 🚀 Quick Start

### Installation

1. **Clone or download the repository:**
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. **Open in browser:**
   Simply open `index.html` in your web browser
   ```bash
   # Windows
   start index.html
   
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   ```

## 📖 How to Use

### Adding Tasks
1. Type your task in the input field
2. (Optional) Select priority from dropdown (Low, Medium, High)
3. Click "Add" button or press Enter
4. Task appears at the top of your list

### Managing Tasks
- **Mark Complete**: Click the checkbox next to a task
- **Edit Task**: Click the edit button (pencil icon)
- **Change Priority**: Select new priority from dropdown on the task
- **Delete Task**: Click the delete button (trash icon)

### Filtering Tasks
- **All**: Show all tasks
- **Active**: Show only incomplete tasks
- **Completed**: Show only completed tasks
- **High Priority**: Show only high-priority tasks

### Exporting & Clearing
- **Export**: Download all tasks as a JSON file for backup
- **Clear**: Remove all completed tasks at once

## 💾 Local Storage

All your tasks are automatically saved to your browser's local storage. This means:
- ✅ Tasks persist across browser sessions
- ✅ No server required
- ✅ Your data stays on your device
- ⚠️ Clearing browser cache will delete tasks (use Export for backup)

## 🏗️ Project Structure

```
todo-app/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom styles and animations
├── js/
│   └── app.js          # Core application logic
└── README.md           # This file
```

## 🔧 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Tailwind CSS framework + custom animations
- **JavaScript** - Vanilla JS (no dependencies)
- **Local Storage API** - Browser-based data persistence
- **Font Awesome** - Icon library

## 📊 Data Structure

Each task is stored as a JSON object:

```json
{
  "id": 1234567890,
  "title": "Buy groceries",
  "priority": "high",
  "completed": false,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "dueDate": null,
  "tags": []
}
```

## 🎯 Future Enhancements

- [ ] Due dates and reminders
- [ ] Task categories and tags
- [ ] Dark mode theme
- [ ] Search functionality
- [ ] Recurring tasks
- [ ] Cloud synchronization
- [ ] Mobile app version
- [ ] Drag-and-drop reordering
- [ ] Task notes and descriptions
- [ ] Keyboard shortcuts

## 🐛 Troubleshooting

### Tasks not saving?
- Check if local storage is enabled in browser settings
- Try clearing cache and reopening
- Check browser console for errors

### Export not working?
- Make sure pop-ups aren't blocked
- Try using a different browser
- Check file downloads folder

### Performance issues?
- Try clearing very old/completed tasks
- Reduce number of tasks if using thousands
- Consider exporting and clearing regularly

## 📝 Tips & Tricks

1. **Keyboard Shortcuts**
   - Press Enter in input field to add task
   - Use Tab to navigate between buttons

2. **Priority Management**
   - Use High priority for urgent tasks
   - Review high-priority tasks first
   - Change priority as urgency changes

3. **Data Backup**
   - Regularly export your tasks
   - Store JSON files safely
   - Import by copying content back

4. **Productivity Tips**
   - Clear completed tasks regularly
   - Start with high-priority items
   - Review tasks daily

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📄 License

MIT License - Free to use and modify

## 👨‍💻 Author

Created by **jm789813-prog**

---

⭐ **If you found this helpful, please give it a star!**
