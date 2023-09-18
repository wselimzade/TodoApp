import AddBar from "./components/AddBar";
import Tasks from "./components/Tasks";
import Completed from "./components/Completed";

import "./style/App.css"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {

  const [tasks, setTasks] = useState(() => {
    const localTasks = localStorage.getItem("tasks");
    return localTasks ? JSON.parse(localTasks) : ['Go shopping', 'Short exercise', 'Meditation'];
  });

  const [completedTasks, setCompletedTasks] = useState(() => {
    const localCompletedTasks = localStorage.getItem("completedTasks");
    return localCompletedTasks ? JSON.parse(localCompletedTasks) : ['Reading'];
  });

  // const [tasks, setTasks] = useState(['Go shopping', 'Short  exercise', 'Meditation']);
  // const [completedTasks, setCompletedTasks] = useState(['Reading'])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks))
  }, [tasks, completedTasks])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const addCompletedTask = (newCompletedTask, index) => {
    deleteTaskForCompleted(index)
    setCompletedTasks([...completedTasks, newCompletedTask])
    toast.success(("Task completed!"), {
      theme: 'colored',
      autoClose: 500
    })
  }

  const deleteTask = (currentTaskIndex) => {
    let updateArr = tasks.filter((item, index) => index !== currentTaskIndex)
    setTasks(updateArr)
    toast.error(("Task deleted!"), {
      theme: "colored",
      autoClose: 500
    })
  }

  const deleteTaskForCompleted = (currentTaskIndex) => {
    let updateArr = tasks.filter((item, index) => index !== currentTaskIndex)
    setTasks(updateArr)
  }

  const deleteCompletedTask = (currentCompletedTaskIndex) => {
    let updateArr = completedTasks.filter((item, index) => index !== currentCompletedTaskIndex)
    setCompletedTasks(updateArr)
    toast.error(("Task deleted!"), {
      theme: "colored",
      autoClose: 500
    })
  }

  const deleteCompletedTaskForUncompleted = (currentCompletedTaskIndex) => {
    let updateArr = completedTasks.filter((item, index) => index !== currentCompletedTaskIndex)
    setCompletedTasks(updateArr)
  }


  const returnTask = (returnTask, index) => {
    deleteCompletedTaskForUncompleted(index)
    setTasks([...tasks, returnTask])
    toast.warning(("Task uncompleted!"), {
      theme: 'colored',
      autoClose: 500
    })
  }

  return (
    <div className="App">
      <ToastContainer style={{ fontSize: '1.2rem' }} />
      <AddBar addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} addCompletedTask={addCompletedTask} />
      <Completed deleteTask={deleteTask} completedTasks={completedTasks} returnTask={returnTask} deleteCompletedTask={deleteCompletedTask} />
    </div>
  );
}

export default App;
