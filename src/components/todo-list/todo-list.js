import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import { ListStyled, ListItemStyled } from "./todo-list.styled";

const TodoList =({todoData, onDeleted, onToggleImportant, onToggleChange}) => {
	const elements=todoData.map((item) => {
		const {id, ...props}=item;
		
		return (
			<ListItemStyled key={item.id}><TodoListItem {...props} onToggleChange={(text) => onToggleChange(id, text)} onDeleted={()=>onDeleted(id)}
			onToggleImportant={()=>onToggleImportant(id)}/></ListItemStyled>
		);
	});

	return (
		<ListStyled>
			{elements}
		</ListStyled>
	);
};
		
export default TodoList;
		