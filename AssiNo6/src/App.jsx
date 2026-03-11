import React, { useState } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import axios from "axios";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const addTask = async (taskText) => {

    const newTask = {
      id: Date.now(),
      text: taskText
    };

    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", newTask);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.log("API error",error);
    }

  };

  const updateTask = (id, newText) => {

    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );

    setTasks(updatedTasks);
    setEditTask(null);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const editTaskHandler = (task) => {
    setEditTask(task);
  };

  return (
    <div className="container">

      <h1>Task Management App</h1>

      <TaskForm
        addTask={addTask}
        editTask={editTask}
        updateTask={updateTask}
      />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTaskHandler={editTaskHandler}
      />

    </div>
  );
}

export default App;