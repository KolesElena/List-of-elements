import React, { useState } from "react";
import { ItemAddFormStyled, ButtonStyled, ErrorStyled, Flex } from "./item-add-form.styled.js";

const ItemAddForm = ({ onAdded }) => {
    
    const [state, setState] = useState({newLabel: ''});
    const [hasError, setHasError] = useState(false);

    const onChangeInput = (e) => {
        setHasError(false);
        setState({
            newLabel: e.target.value
        });
    };
    
    const onSubmitFunc = (e) => {
        e.preventDefault();
        if(state.newLabel) {
            onAdded(state.newLabel);
            setState({newLabel: ''})
        } else {
            setHasError(true);
        }
    };
    
    return (
        <ItemAddFormStyled data-testid="form" onSubmit={onSubmitFunc}>
			<Flex>
				<input type="text" placeholder="What needs to be done" className="form-control mr-2"
				onChange={onChangeInput} value={state.newLabel} />
				<ButtonStyled className="btn btn-outline-secondary">Add Item</ButtonStyled>
			</Flex>
            {hasError && <ErrorStyled>This field is required!</ErrorStyled>}
        </ItemAddFormStyled>
        );
    };
    
    export default ItemAddForm;
