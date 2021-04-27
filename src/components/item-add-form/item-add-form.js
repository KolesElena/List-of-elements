import React, { useState } from "react";
import { ItemAddFormStyled, ButtonStyled } from "./item-add-form.styled.js";

const ItemAddForm = ({ onAdded }) => {
	
	const [state, setState] = useState({newLabel: ''});

	const onChangeInput = (e) => {
		setState({
			newLabel: e.target.value
		});
	};
	
	const onSubmitFunc = (e) => {
		e.preventDefault();
		onAdded(state.newLabel);
		setState({newLabel: ''})
	};
	
	return (
		<ItemAddFormStyled onSubmit={onSubmitFunc}>
			<input type="text" placeholder="What needs to be done" className="form-control mr-2" onChange={onChangeInput} value={state.newLabel} />
			<ButtonStyled className="btn btn-outline-secondary">Add Item</ButtonStyled>
		</ItemAddFormStyled>
		);
	};
	
	export default ItemAddForm;