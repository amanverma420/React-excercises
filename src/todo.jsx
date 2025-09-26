import { useState } from "react";

function Todo() {
  const [list, setList] = useState([
    { id: 1, activity: "exercise" },
    { id: 2, activity: "study" },
    { id: 3, activity: "sleep" },
    { id: 4, activity: "eat" },
    { id: 5, activity: "code" }
  ]);
  const [newItem, setNewItem] = useState("");

  function handleDelete(removeId) {
    const tempArr = list.filter((item) => item.id !== removeId);
    setList(tempArr);
  }

  function handleChange(event) {
    setNewItem(event.target.value);
  }

  function addElement() {
    setList([...list, { id: list.length + 1, activity: newItem }]);
    setNewItem("");
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input value={newItem} onChange={handleChange} placeholder="New Activity" />
      <button onClick={addElement}>Add</button>
      <ul>
        {list.map((item) => (
          <li key={item.id} className="todo-list-item">
            <span className="todo-activity">{item.activity}</span>
            <button className="todo-delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
