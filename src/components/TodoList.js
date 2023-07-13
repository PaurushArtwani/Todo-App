import React, { useState } from "react";

const TodoList = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [editedItem, setEditedItem] = useState(props.item);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setEditedItem(e.target.value);
  };

  const handleSave = () => {
    props.editItem(props.index, editedItem);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditedItem(props.item);
    setEditMode(false);
  };

  return (
    <div className="">
      {editMode ? (
        <div className="edit-mode text-center">
          <input
            type="text"
            className="todo-input"
            value={editedItem}
            onChange={handleInputChange}
          />
          <button className="todo-btn" onClick={handleSave}>
            Save
          </button>
          <button className="todo-btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <p className="Todolist">
          {props.item}
          <span className="icons">
            <i
              className="fa-solid fa-pen-to-square edit-button"
              onClick={handleEdit}
            ></i>
            <i
              className="fa-solid fa-trash-can"
              onClick={() => {
                props.deleteItem(props.index);
              }}
            ></i>
          </span>
        </p>
      )}
    </div>
  );
};

export default TodoList;
