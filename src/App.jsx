import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, text: 'Master React Fundamentals', completed: true },
      { id: 2, text: 'Build a modern To-Do app', completed: false },
      { id: 3, text: 'Ship to production', completed: false }
    ];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="app-header">Tasks</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList 
        todos={todos} 
        onToggle={toggleTodo} 
        onDelete={deleteTodo} 
      />
    </div>
  );
}

export default App;
