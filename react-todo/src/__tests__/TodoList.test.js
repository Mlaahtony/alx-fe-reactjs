import '@testing-library/jest-dom';
import React from 'react';
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

    const input = screen.getByTestId('todo-input'); // Get the input element
    const addButton = screen.getByTestId('add-button'); // Get the add button

    fireEvent.change(input, { target: { value: 'New Todo' } }); // Simulate typing
    fireEvent.click(addButton); // Simulate clicking the add button

    const newTodo = screen.getByText('New Todo'); // Check if the new todo appears
    expect(newTodo).toBeInTheDocument();
  });

  it('toggles a todo item completion status', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Build Todo App');
    const toggleButton = screen.getByTestId('toggle-2');

    // Initially, the text should not have a line-through style
    expect(todoItem).toHaveStyle('text-decoration: none');

    // Click to mark as completed
    fireEvent.click(toggleButton);
    expect(todoItem).toHaveStyle('text-decoration: line-through');  // Check if text is crossed out

    // Click to mark as undone
    fireEvent.click(toggleButton);
    expect(todoItem).toHaveStyle('text-decoration: none');  // Check if text is not crossed out
  });

  it('deletes a todo item', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Build Todo App');
    const deleteBtn = screen.getAllByTestId(/delete-/)[1];  // Get the second delete button

    fireEvent.click(deleteBtn);
    expect(todoItem).not.toBeInTheDocument();
  });
});
