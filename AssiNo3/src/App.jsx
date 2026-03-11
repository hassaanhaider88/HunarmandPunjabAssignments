import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (task === "") return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: task, completed: false }]);
    }

    setTask("");
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((item, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEdit = (index) => {
    setTask(tasks[index].text);
    setEditIndex(index);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>To Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={handleAddTask}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul>
        {tasks.length === 0 && <p>No tasks added</p>}

        {tasks.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(index)}>{item.text}</span>

            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
