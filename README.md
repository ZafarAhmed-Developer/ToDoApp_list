# Todo App

A modern, responsive Todo application built with React and Vite, featuring a clean UI with Tailwind CSS styling. This app allows users to manage their daily tasks with features like adding, editing, marking complete, and deleting todos.

## 🚀 Features

- **Add Tasks**: Easily add new tasks with a simple input form
- **Edit Tasks**: Click the edit icon to modify existing tasks inline
- **Mark Complete**: Click on task text to toggle completion status with visual feedback
- **Delete Tasks**: Remove tasks with the delete button
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional design with smooth transitions

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 4.1.18
- **Language**: JavaScript (ES6+)
- **Linting**: ESLint with React-specific rules

## 📁 Project Structure

```
Todo-app/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Asset files
│   ├── components/        # React components
│   │   ├── TodoForm.jsx   # Form component for adding tasks
│   │   ├── TodoItem.jsx   # Individual todo item component
│   │   └── TodoList.jsx   # List container for todo items
│   ├── App.jsx            # Main application component
│   ├── App.css            # Application-specific styles (minimal)
│   ├── index.css          # Global styles with Tailwind
│   └── main.jsx           # Application entry point
├── eslint.config.js       # ESLint configuration
├── vite.config.js         # Vite configuration
├── package.json           # Project dependencies and scripts
├── index.html             # HTML template
└── README.md              # Project documentation
```

## 🏗️ Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📖 Usage

### Adding a Task

- Type your task in the input field
- Click "Add Task" button or press Enter

### Editing a Task

- Click the edit icon (pencil) next to any task
- Modify the text in the inline input field
- Press Enter or click the checkmark to save

### Marking Tasks Complete

- Click directly on the task text to toggle completion
- Completed tasks show with strikethrough and reduced opacity

### Deleting a Task

- Click the trash icon next to any task to remove it

## 🔧 Components Documentation

### App.jsx

The root component that manages the application state and renders the main UI.

**State Management**:

- `todoList`: Array of todo items stored as strings

**Props Passed**:

- `todoList` and `setTodoList` to child components

### TodoForm.jsx

Handles the input form for adding new tasks.

**Features**:

- Controlled input with state management
- Adds tasks on button click or Enter key press
- Trims whitespace from input

**Props**:

- `todoList`: Current list of todos
- `setTodoList`: Function to update the list

### TodoList.jsx

Container component that renders the list of todo items.

**Features**:

- Maps over the todo array to render individual items
- Passes necessary props to each TodoItem

**Props**:

- `todoList`: Array of todo strings
- `setTodoList`: Function to update the list

### TodoItem.jsx

Individual todo item component with full CRUD functionality.

**State**:

- `isEditing`: Boolean to toggle edit mode
- `editValue`: String for the edited task text
- `status`: Boolean indicating completion status

**Features**:

- Toggle completion by clicking task text
- Inline editing with save/cancel functionality
- Delete functionality
- Visual feedback for completed tasks

**Props**:

- `value`: The todo text
- `indexNumber`: Index in the array for identification
- `todoList`: Full todo array
- `setTodoList`: Function to update the list

## 🎨 Styling

The application uses Tailwind CSS for styling with a custom color scheme:

- Background: `#a3b18a` (sage green)
- Card: `#1b4332` (dark green)
- Accent: `#88a383` (medium green)
- Completed: `#b9b1a9` (muted beige)

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🔍 Development

### Code Quality

- ESLint configured with React-specific rules
- React Hooks linting enabled
- Hot module replacement for fast development

### Build Configuration

- Vite for fast builds and development
- Tailwind CSS integrated via Vite plugin
- Modern JavaScript with ES modules

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
