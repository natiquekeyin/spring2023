import logo from "./logo.svg";
import "./App.css";
import Skills from "./skills/Skills";
import Event from "./myevents/Event";

function App() {
  const skills = ["a", "b", "c"];
  return (
    <div>
      {/* <Skills skills={skills} /> */}
      <Event />
    </div>
  );
}

export default App;
