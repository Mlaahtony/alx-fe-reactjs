import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn React', isCompleted: false },
    { text: 'Build Todo App', isCompleted: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  // Handle toggling the completion status of a todo
  const handleToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
  };

  // Handle deleting a todo
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  // Handle adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, isCompleted: false }]);
      setNewTodo(''); // Clear the input after adding the todo
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      {/* Input field and Add Todo button */}
      <input
        type="text"
        data-testid="todo-input"  // Add data-testid for testing
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button
        data-testid="add-button"  // Add data-testid for testing
        onClick={handleAddTodo}
      >
        Add Todo
      </button>

      {/* Todo list */}
      <ul data-testid="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            data-testid={`todo-${index + 1}`}
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : 'none'
            }}
          >
            {todo.text}
            <button
              data-testid={`toggle-${index + 1}`}
              style={{ marginLeft: '10px' }}
              onClick={() => handleToggle(index)}
            >
              Complete
            </button>
            <button
              data-testid={`delete-${index + 1}`}
              style={{ marginLeft: '10px' }}
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
