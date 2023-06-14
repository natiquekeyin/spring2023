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
  // Delete task function

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggling reminder for tasks

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    // line 22 will match the id of the task "task.id" with provided id "id", if it matches.. it spreads out the current task and toggles the reminder value....if it does not matches... return that task without a change.....
  };

  return (
    <>
      <div className="container">
        <Header title="Todo List" />

        {tasks.length > 0 ? (
          <Tasks
            values={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No tasks found"
        )}
      </div>
    </>
  );
  // the above all is "jsx.."
}

export default App;
