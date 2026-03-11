/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";

function TaskForm({ addTask, editTask, updateTask }) {

  const [task, setTask] = useState("");

  useEffect(() => {
    if (editTask) {
      setTask(editTask.text);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task === "") {
      alert("Task cannot be empty");
      return;
    }

    if (editTask) {
      updateTask(editTask.id, task);
    } else {
      addTask(task);
    }

    setTask("");
  };

  return (

    <form onSubmit={handleSubmit} className="form">

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">
        {editTask ? "Update Task" : "Add Task"}
      </button>

    </form>

  );
}

export default TaskForm;