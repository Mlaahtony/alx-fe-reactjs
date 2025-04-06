import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Todo App', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState(''); // For handling new todo input

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem = {
        id: todos.length + 1,
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      {/* Input and button to add new todos */}
      <input
        data-testid="todo-input"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button
        data-testid="add-button"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
      
      <ul data-testid="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            data-testid={`todo-${todo.id}`}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
            <button
              data-testid={`delete-${todo.id}`}
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
            <button
              data-testid={`toggle-${todo.id}`}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


