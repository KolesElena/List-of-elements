import { render, screen, fireEvent } from '@testing-library/react';
import ItemAddForm from './item-add-form';

test('adding the item to the list', () => {
	const callback = jest.fn();
	
	render(<ItemAddForm onAdded={callback}  />);
	
	const input = screen.getByPlaceholderText('What needs to be done');
	const form = screen.getByTestId('form');
	fireEvent.change(input, { target: { value: 'New item' } });
	fireEvent.submit(form);
	
	expect(callback).toHaveBeenCalled();
	expect(callback).toHaveBeenCalledWith('New item');
});