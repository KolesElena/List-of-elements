import React, { useState } from "react";
import { LabelStyled, ButtonStyled, ListItemStyled, ButtonsStyled } from './todo-list-item.styled';

const TodoListItem = ({label, important, editing, onDeleted, onToggleChange, onToggleImportant}) => {
  
  const [text, setText] = useState(label)

  const onEdit = (e) => setText(e.target.value);

    return (
      <ListItemStyled>
        {editing
          ? <input type="text" value={text} onChange={onEdit} />
          : <LabelStyled important={important}>{label}</LabelStyled>
        }
        <ButtonsStyled>
          <ButtonStyled data-testid="important" important={important} className="btn btn-outline-info btn-sm" onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
          </ButtonStyled>
          <ButtonStyled data-testid="edit" important={important} type="button" className="btn btn-outline-secondary btn-sm" onClick={() => {onToggleChange(text)}}>
            {editing
              ? <i className="fa fa-check" />
              : <i className="fa fa-edit" />
          }
          </ButtonStyled>
          <ButtonStyled data-testid="delete" important={important} type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleted}>
          <i className="fa fa-trash-o" /></ButtonStyled>
        </ButtonsStyled>
      </ListItemStyled>
    );
}

export default TodoListItem;
