import AddBar from "./components/AddBar";
import Tasks from "./components/Tasks";
import Completed from "./components/Completed";

import "./style/App.css"

function App() {
  return (
    <div className="App">
      <AddBar />
      <Tasks />
      <Completed />
    </div>
  );
}

export default App;
