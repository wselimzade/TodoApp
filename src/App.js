import AddBar from "./components/AddBar";
import Tasks from "./components/Tasks";
import Completed from "./components/Completed";

import "./style/App.css"
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const deleteTask = (currentTaskIndex) => {
    let updateArr = tasks.filter((item, index) => index !== currentTaskIndex)
    setTasks(updateArr)
  }

  // const addCompletedTask = (newCompletedTask) => {
  //   setCompletedTasks([...completedTasks, newCompletedTask])
  // }

  console.log(tasks)

  return (
    <div className="App">
      <AddBar addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask}  />
      <Completed deleteTask={deleteTask} completedTasks={completedTasks} />
    </div>
  );
}

export default App;
