import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="App">
        <h1>My First Application -</h1>
        <p>React is fun to learn!!!!</p>
      </div>
      <div className="App">
        <h1>Hello</h1>
        <p>
          <Header title="First" body="Some text in First header" />
          <Header title="Second" body="SOme body text" />
          <Header body="Some body text in comp 3" />
        </p>
      </div>
    </>
  );
  // the above all is "jsx.."
}

export default App;
