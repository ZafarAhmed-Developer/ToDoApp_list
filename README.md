# Todo App - Frontend

A modern, responsive Todo application frontend built with React and Vite.

## Description

This is the frontend implementation of a Todo application, providing a user-friendly interface to create, manage, and organize your daily tasks. The application features a clean and intuitive design with full CRUD operations for todo items.

## Features

- ✅ Create new todo items
- ✏️ Edit existing todos
- 🗑️ Delete todos
- ✔️ Mark todos as complete/incomplete
- 💾 Persistent data management
- 📱 Responsive design
- ⚡ Fast performance with Vite

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v16.0 or higher)
- npm (v7.0 or higher) or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd todo-app-Frontend
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables (if needed):

```bash
# Create a .env file in the root directory if required
```

## Usage

### Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx       # Component for adding new todos
│   ├── TodoItem.jsx       # Individual todo item component
│   └── TodoList.jsx       # Container for displaying all todos
├── App.jsx                # Main application component
├── App.css                # Application styles
├── index.css              # Global styles
└── main.jsx               # Application entry point
public/                    # Static assets
index.html                 # HTML template
vite.config.js            # Vite configuration
package.json              # Project dependencies and scripts
```

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend build tool
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling
- **ESLint** - Code linting

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## Components

### TodoForm

Handles the creation of new todo items. Provides an input field and submit button for users to add tasks.

### TodoItem

Displays individual todo items with options to edit, delete, and mark as complete/incomplete.

### TodoList

Container component that manages and displays all todo items.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions, please open an issue in the repository.

---

**Happy Coding!** 🚀
