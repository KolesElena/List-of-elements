import { render, screen, fireEvent } from '@testing-library/react';
import TodoListItem from './todo-list-item';

test('renders the label', () => {
  render(<TodoListItem label="Test" />);

  const labelElement = screen.getByText('Test');
  expect(labelElement).toBeInTheDocument();
});

test('renders the component in editing mode', () => {
    // Arrange
    const callback = jest.fn();
    render(<TodoListItem label="Test" editing onToggleChange={callback} />);
  
    // Act
    const input = screen.getByDisplayValue('Test');
    const editButton = screen.getByTestId('edit');
    fireEvent.change(input, { target: { value: 'Hi' } });
    fireEvent.click(editButton, new MouseEvent('click'));

    // Assert
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith('Hi');
  });
  