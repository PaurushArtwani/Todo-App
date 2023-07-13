import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";

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
            <AiOutlineEdit
              className="fa-solid fa-pen-to-square edit-button"
              onClick={handleEdit}
            />
            <RiDeleteBin6Line
              className="fa-solid fa-trash-can"
              onClick={() => {
                props.deleteItem(props.index);
              }}
            />
          </span>
        </p>
      )}
    </div>
  );
};

export default TodoList;
