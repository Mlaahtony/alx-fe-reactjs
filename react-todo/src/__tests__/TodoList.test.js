import '@testing-library/jest-dom';  // Make sure this is added
import React from 'react';  // Add this line if not present
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/todoList';

describe('TodoList Component', () => {
  it('renders initial todos', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    expect(todoItem).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
    const newTodo = screen.getByText('New Todo');
    expect(newTodo).toBeInTheDocument();
  });

  it('toggles a todo item completion status', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Build Todo App');
    fireEvent.click(todoItem);  // Mark it as completed
    expect(todoItem).toHaveStyle('text-decoration: line-through'); // Check if text is crossed out
    fireEvent.click(todoItem);  // Mark it as undone
    expect(todoItem).toHaveStyle('text-decoration: none'); // Check if text is not crossed out
  });

  it('deletes a todo item', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Build Todo App');
    const deleteBtn = screen.getAllByTestId(/delete-/)[1];  // Get the second delete button
    fireEvent.click(deleteBtn);
    expect(todoItem).not.toBeInTheDocument();  // Check if the todo item is removed
  });
});
