import SearchBar from "./components/searchBar";
import Tasks from "./components/tasks";
import Completed from "./components/completed";

import "./style/App.css"

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Tasks />
      <Completed />
    </div>
  );
}

export default App;
