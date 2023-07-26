import logo from "./logo.svg";
import "./App.css";
import Skills from "./skills/Skills";

function App() {
  const skills = ["a", "b", "c"];
  return (
    <div className="App">
      <Skills skills={skills} />
    </div>
  );
}

export default App;
