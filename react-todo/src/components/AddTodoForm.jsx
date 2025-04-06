// src/components/AddTodoForm.jsx
import React, { useState } from 'react';

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
        data-testid="todo-input"
      />
      <button type="submit" data-testid="add-button">Add</button>
    </form>
  );
}
