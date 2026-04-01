import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>You're all caught up! ✨</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}

export default TodoList;
