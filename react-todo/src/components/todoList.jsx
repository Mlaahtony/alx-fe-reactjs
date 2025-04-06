import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn React', isCompleted: false },
    { text: 'Build Todo App', isCompleted: false }
  ]);

  const handleToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newTodo = { text: e.target.todoText.value, isCompleted: false };
    setTodos([...todos, newTodo]);
    e.target.reset();
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleAdd}>
        <input
          data-testid="todo-input"
          type="text"
          name="todoText"
          placeholder="Enter new todo"
        />
        <button data-testid="add-button" type="submit">Add Todo</button>
      </form>
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

