import { render, screen, fireEvent } from '@testing-library/react';
import App from './app';

test('Initial labels are displayed', () => {
    render(<App />);

    const input = screen.getByText('Fill out a tax return');

    expect(input).toBeInTheDocument();
});

test('Remove a label', () => {
    render(<App />);

    const [firstDeleteButton] = screen.getAllByTestId('delete');
    fireEvent.click(firstDeleteButton, new MouseEvent('click'));

    const deletedLabel = screen.queryByText('Fill out a tax return');
    expect(deletedLabel).not.toBeInTheDocument();
});

test('Add new item', () => {
    render(<App />);

    const form = screen.getByTestId('form');
    const input = screen.getByPlaceholderText('What needs to be done');
    fireEvent.change(input, { target: { value: 'New item!' } });
    fireEvent.submit(form);

    const newLabel = screen.getByText('New item!');
    expect(newLabel).toBeInTheDocument();
});

test('renders the component in editing mode', () => {  
    render(<App/>);

    const [firstEditButton] = screen.getAllByTestId('edit');
    fireEvent.click(firstEditButton, new MouseEvent('click'));
  
    const input = screen.getByDisplayValue('Fill out a tax return');
    fireEvent.change(input, { target: { value: 'Changed element' } });
    fireEvent.click(firstEditButton, new MouseEvent('click'));

    const changedElement = screen.getByText('Changed element');
    expect(changedElement).toBeInTheDocument();
  });