import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddClick = () => {
    props.addList(inputText);
    setInputText("");
  };
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };

  return (
    <div className="TodoForm text-center">
      <h1 className="text-center">Get Thinks Done!</h1>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
      />
      <button type="submit" className="todo-btn" onClick={handleAddClick}>
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;
