import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <div className="container">
        <Header title="Todo List" />
        <Tasks />
      </div>
    </>
  );
  // the above all is "jsx.."
}

export default App;
