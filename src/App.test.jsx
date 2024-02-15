// App.test.js
import { render, fireEvent } from '@testing-library/react';
import App from './App.jsx';


test('renders Todo App header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Todo App/i);
  expect(headerElement).toBeInTheDocument();
});

test('adds a new todo', () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const inputElement = getByPlaceholderText('Type your todo here');
  const addButtonElement = getByText('Add Todo');

  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(addButtonElement);

  const newTodoElement = getByText('New Todo');
  expect(newTodoElement).toBeInTheDocument();
});

test('deletes a todo', () => {
  const { getByText, getByPlaceholderText, queryByText } = render(<App />);
  const inputElement = getByPlaceholderText('Type your todo here');
  const addButtonElement = getByText('Add Todo');

  fireEvent.change(inputElement, { target: { value: 'Todo to delete' } });
  fireEvent.click(addButtonElement);

  const deleteButtonElement = getByText('Delete');
  fireEvent.click(deleteButtonElement);

  const deletedTodoElement = queryByText('Todo to delete');
  expect(deletedTodoElement).not.toBeInTheDocument();
});
