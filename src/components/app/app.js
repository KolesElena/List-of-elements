import React, { useState } from "react";
import AppHeader from "../app-header/app-header";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form";
import { AppStyled } from './app.styled';

const App = () => {
	
	let maxId = 100;
	
	const createTodoItem = (label) => {
		return {
			label,
			important: false,
			editing: false,
			done: false,
			id: maxId++
		}
	};
	
	const [state, setState] = useState({
		todoData: [
			createTodoItem("Fill out a tax return"),
			createTodoItem("Build an App"),
			createTodoItem("Clean the apartment")
		],
		term: ""
	});
	
	const ToggleChanged = (id, label) => {
		const newItems = state.todoData.map((item) => {
			if (item.id === id) {
				return {
					...item,
					editing: !item.editing,
					label
				};
			}
			return item;
		});
		
		setState({
			...state,
			todoData: newItems
		});
	};
	
	const ToggleImportant = (id) => {
		const newItems = state.todoData.map((item) => {
			if (item.id === id) {
				return {
					...item,
					important: !item.important
				};
			}
			return item;
		});
		
		setState({
			...state,
			todoData: newItems
		});
	};
	
	const deleteItem = (id) => {
		setState(({todoData}) => {
			const idx = todoData.findIndex((el) => el.id === id);
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
	
	const { todoData } = state;
	
	return ( 
		<AppStyled >
			<AppHeader / >
			<TodoList todoData = {todoData}
			onToggleImportant = { ToggleImportant }
			onToggleChange = { ToggleChanged }
			onDeleted = { deleteItem } /> 
			<ItemAddForm onAdded = { addItem } /> 
		</AppStyled>
		);
};
	
export default App;