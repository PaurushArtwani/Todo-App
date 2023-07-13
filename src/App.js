import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  const deleteListItem = (key) => {
    const newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  const editItem = (index, newText) => {
    const newListTodo = [...listTodo];
    newListTodo[index] = newText;
    setListTodo(newListTodo);
  };
  return (
    <div className="Todo">
      <TodoInput addList={addList} />

      {listTodo.map((listItem, i) => {
        return (
          <TodoList
            key={i}
            index={i}
            item={listItem}
            deleteItem={deleteListItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
}

export default App;
