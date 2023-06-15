import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import Hooks from "./components/Hooks";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Groceries", day: "June 9th at 1:00pm", reminder: false },
    { id: 2, text: "Meeting", day: "June 19th at 12:00pm", reminder: true },
    {
      id: 3,
      text: "Appointment with Mechanice",
      day: "June 16th at 10:00am",
      reminder: false,
    },
  ]);

  const [users, setUsers] = useState([]);
  // a state variable for showing/unshowing the AddTask form...
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      // console.log(data.data);

      setUsers(data.data);
    };

    fetchData();
  }, []);

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

  // Now addTask function to add a task..this function will receive a new task and update the "tasks" array in our App component...

  const addTask = (task) => {
    // const id = tasks.length + 1;

    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <div className="container">
        <Header
          title="Todo List"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        {showAddTask && <AddTask onAdd={addTask} />}

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
