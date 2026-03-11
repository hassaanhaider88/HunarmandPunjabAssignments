import React from "react";

function TaskList({ tasks, deleteTask, editTaskHandler }) {

  return (

    <div className="task-list">

      {tasks.length === 0 && <p>No tasks available</p>}

      {tasks.map((task) => (

        <div className="task-card" key={task.id}>

          <span>{task.text}</span>

          <div>

            <button onClick={() => editTaskHandler(task)}>
              Edit
            </button>

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>

  );
}

export default TaskList;