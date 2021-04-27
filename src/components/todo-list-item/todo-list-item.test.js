import { render, screen, fireEvent } from '@testing-library/react';
import TodoListItem from './todo-list-item';

const callback = jest.fn();

test('renders the label', () => {
  render(<TodoListItem label="Test" />);

  const labelElement = screen.getByText('Test');
  expect(labelElement).toBeInTheDocument();
});

test('renders the component in editing mode', () => {
    // Arrange
    
    render(<TodoListItem label="Test" editing onToggleChange={callback} />);
  
    // Act
    const input = screen.getByDisplayValue('Test');
    const editButton = screen.getByTestId('edit');
    fireEvent.change(input, { target: { value: 'Changed element' } });
    fireEvent.click(editButton, new MouseEvent('click'));

    // Assert
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith('Changed element');
  });

  test('deletes the item', () => {
    // Arrange
    render(<TodoListItem onDeleted={callback} />);
  
    // Act
    const deleteButton = screen.getByTestId('delete');
    fireEvent.click(deleteButton, new MouseEvent('click'));

    // Assert
    expect(callback).toHaveBeenCalled();
  });

  test('marks the item as important', () => {
    // Arrange
    render(<TodoListItem onToggleImportant={callback} />);
  
    // Act
    const importantButton = screen.getByTestId('important');
    fireEvent.click(importantButton, new MouseEvent('click'));

    // Assert
    expect(callback).toHaveBeenCalled();
  });
  