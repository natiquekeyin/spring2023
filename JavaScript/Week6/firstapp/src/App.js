import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Groceries", day: "June 9th at 1:00pm" },
    { id: 2, text: "Meeting", day: "June 19th at 12:00pm" },
    { id: 3, text: "Appointment with Mechanice", day: "June 16th at 10:00am" },
  ]);
  return (
    <>
      <div className="container">
        <Header title="Todo List" />
        <Tasks values={tasks} />

        {/* <Hooks /> */}
        {/* <Hooks1 /> */}
      </div>
    </>
  );
  // the above all is "jsx.."
}

export default App;
