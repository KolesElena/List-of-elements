import React, { useState } from "react";
import { LabelStyled, ButtonStyled } from './todo-list-item.styled';

const TodoListItem = (props) => {
  const [text, setText] = useState(props.label)

  const onEdit = (e) => setText(e.target.value);

    return (
      <span className="todo-list-item">
        {props.editing
          ? <input type="text" value={text} onChange={onEdit} />
          : <LabelStyled important={props.important}>{props.label}</LabelStyled>
        }
        <ButtonStyled important={props.important} className="btn btn-outline-info btn-sm float-right" onClick={props.onToggleImportant}>
        <i className="fa fa-exclamation" />
        </ButtonStyled>
        <ButtonStyled data-testid="edit" important={props.important} type="button" className="btn btn-outline-secondary btn-sm float-right" onClick={() => props.onToggleChange(text)}>
          {props.editing
            ? <i className="fa fa-check" />
            : <i className="fa fa-edit" />
        }
        </ButtonStyled>
        <ButtonStyled important={props.important} type="button" className="btn btn-outline-danger btn-sm float-right" onClick={props.onDeleted}>
        <i className="fa fa-trash-o" /></ButtonStyled>
      </span>
    );
}

export default TodoListItem;
