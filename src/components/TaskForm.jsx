import React, { useState } from "react";

export default function TaskForm({ addTask }) {
  // Accept addTask as a prop from App.js
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission & refresh. refresh would clear all tasks and states
    addTask({ task: task, priority, category, completed: false }); // Call addTask with the new 'task' object, reflect in App.js
    setTask("");
    setPriority("Medium");
    setCategory("General");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          required
        />{" "}
        <span>
          <button type="submit">Add Task</button>
        </span>
        <div id="btns">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
      </div>
    </form>
  );
}
