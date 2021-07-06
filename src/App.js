import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Context from "./context";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "Feb 5th at 4:30pm",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Context.Provider value={{ tasks, setTasks }}>
      <div className="container">
        <Header title="Task tracker" />
        {tasks.length ? (
          <Tasks onDelete={deleteTask} tasks={tasks} />
        ) : (
          <p>You have no tasks.</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
