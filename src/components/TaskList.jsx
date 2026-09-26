import React from "react";

export default function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTasks = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };
    updateTask(index, updatedTasks);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          <div>
            <span>{task.task}</span>
            <small>
              ({task.priority}, {task.category})
            </small>
          </div>
          <div>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
