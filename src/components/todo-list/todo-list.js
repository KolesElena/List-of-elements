import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import { ListStyled, ListItemStyled } from "./todo-list.styled";

const TodoList =({todoData, onDeleted, onToggleImportant, onToggleChange}) => {
	const elements=todoData.map((item, index) => {
		
		return (
			<ListItemStyled key={index}><TodoListItem {...item} onToggleChange={(text) => onToggleChange(index, text)} onDeleted={()=>onDeleted(index)}
			onToggleImportant={()=>onToggleImportant(index)}/></ListItemStyled>
		);
	});

	return (
		<ListStyled>
			{elements}
		</ListStyled>
	);
};
		
export default TodoList;
		