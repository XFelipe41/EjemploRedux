import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskFrom from "./components/TaskFrom";

function App() {
  return (
    <div className="bg-gray-900 h-screen text-white">
      <div className="flex items-center justify-center h-full ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create" element={<TaskFrom />} />
            <Route path="/edit-task/:id" element={<TaskFrom />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
