import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Hooks from "./components/Hooks";
function App() {
  return (
    <>
      <div className="container">
        {/* <Header title="Todo List" />
        <Tasks /> */}

        <Hooks />
      </div>
    </>
  );
  // the above all is "jsx.."
}

export default App;
