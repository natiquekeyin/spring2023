import logo from "./logo.svg";
import "./App.css";
import useSmoothScroll from "./hooks/useSmoothScroll";
import useDocTitle from "./hooks/useDocTitle";
function App() {
  // const [refToScroll, smoothScroll] = useSmoothScroll();
  // const [topRef, smoothScrollToTop] = useSmoothScroll();
  const [title, setDocTitle] = useDocTitle("Start page");
  return (
    <div className="App">
      <button onClick={() => setDocTitle("updated one...")}>
        Change document title
      </button>

      {/* <button onClick={smoothScroll} ref={topRef}>
        Scroll
      </button>
      <div style={{ marginTop: "150vh" }} ref={refToScroll}>
        I am here
      </div>
      <button onClick={smoothScrollToTop}>Go UP</button> */}
    </div>
  );
}

export default App;
