import React, { useState } from "react";
import AppHeader from "../app-header/app-header";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form";
import { AppStyled } from './app.styled';

const App = () => {
	const createTodoItem = (label) => {
		return {
			label,
			important: false,
			editing: false,
		}
	};
	
	const [state, setState] = useState({
		todoData: [
			createTodoItem("Fill out a tax return"),
			createTodoItem("Build an App"),
			createTodoItem("Clean the apartment")
		]
	});
	
	const ToggleChanged = (itemIndex, label) => {
		const newItems = state.todoData.map((item, index) => {
			if (index === itemIndex) {
				return {
					...item,
					editing: !item.editing,
					label
				};
			}
			return item;
		});
		
		setState({
			todoData: newItems
		});
	};
	
	const ToggleImportant = (itemIndex) => {
		const newItems = state.todoData.map((item, index) => {
			if (itemIndex === index) {
				return {
					...item,
					important: !item.important
				};
			}
			return item;
		});
		
		setState({
			todoData: newItems
		});
	};
	
	const deleteItem = (itemIndex) => {
		setState(({todoData}) => {
			const idx = todoData.findIndex((el, index) => itemIndex === index);
			const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
			return {
				todoData: newArray
			}
		});
	};

	const addItem = (text) => {
		const newItem = createTodoItem(text);
		
		setState(({todoData}) => {
			const newArr = [...todoData, newItem];
			return {
				todoData: newArr
			}
		});
	};
	
	return ( 
		<AppStyled >
			<AppHeader />
			<TodoList todoData = {state.todoData}
				onToggleImportant = { ToggleImportant }
				onToggleChange = { ToggleChanged }
				onDeleted = { deleteItem }
			/> 
			<ItemAddForm onAdded = { addItem }/> 
		</AppStyled>
		);
};
	
export default App;