import AddBar from "./components/AddBar";
import Tasks from "./components/Tasks";
import Completed from "./components/Completed";

import "./style/App.css"
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([
    'Go shopping', 'Short  exercise', 'Meditation'
  ]);
  const [completedTasks, setCompletedTasks] = useState(['Reading'])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const deleteTask = (currentTaskIndex) => {
    let updateArr = tasks.filter((item, index) => index !== currentTaskIndex)
    setTasks(updateArr)
  }

  const deleteCompletedTask = (currentCompletedTaskIndex) => {
    let updateArr = completedTasks.filter((item, index) => index !== currentCompletedTaskIndex)
    setCompletedTasks(updateArr)
  }

  const addCompletedTask = (newCompletedTask, index) => {
    setCompletedTasks([...completedTasks, newCompletedTask])
    deleteTask(index)
  }

  const returnTask = (returnTask, index) => {
    setTasks([...tasks, returnTask])
    deleteCompletedTask(index)
  }

  return (
    <div className="App">
      <AddBar addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} addCompletedTask={addCompletedTask} />
      <Completed deleteTask={deleteTask} completedTasks={completedTasks} returnTask={returnTask} deleteCompletedTask={deleteCompletedTask} />
    </div>
  );
}

export default App;
