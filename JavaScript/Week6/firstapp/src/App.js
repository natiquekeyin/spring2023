import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import Hooks from "./components/Hooks";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TaskDetails from "./components/TaskDetails";

function App() {
  const [tasks, setTasks] = useState([]);

  const [users, setUsers] = useState([]);
  // a state variable for showing/unshowing the AddTask form...
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  //fetchTasks function..

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // fetchTask...
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Delete task function

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggling reminder for tasks

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id); //bring one task from tasks...
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    // updTask will take the taskToToggle and Just flip the reminder from its previous value

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
    // line 22 will match the id of the task "task.id" with provided id "id", if it matches.. it spreads out the current task and toggles the reminder value....if it does not matches... return that task without a change.....
  };

  // Now addTask function to add a task..this function will receive a new task and update the "tasks" array in our App component...

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    // // const id = tasks.length + 1;

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Todo List"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Routes>
          {/* <Route
            path="/"
            element={
              <>
                <Link to="/tasks">Tasks</Link> <br />
                <Link to="/about">About</Link> <br />
                <Link to="/footer">Footer</Link>
              </>
            }
          /> */}
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
  // the above all is "jsx.."
}

export default App;
