import logo from "./logo.svg";
import "./App.css";
import useSmoothScroll from "./hooks/useSmoothScroll";
import useDocTitle from "./hooks/useDocTitle";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";

// function App() {
//   // const [refToScroll, smoothScroll] = useSmoothScroll();
//   // const [topRef, smoothScrollToTop] = useSmoothScroll();
//   const [title, setDocTitle] = useDocTitle("Start page");
//   return (
//     <div className="App">
//       {/* <button onClick={() => setDocTitle("updated one...")}>
//         Change document title
//       </button> */}

//       {/* <button onClick={smoothScroll} ref={topRef}>
//         Scroll
//       </button>
//       <div style={{ marginTop: "150vh" }} ref={refToScroll}>
//         I am here
//       </div>
//       <button onClick={smoothScrollToTop}>Go UP</button> */}
//     </div>
//   );
// }

// function App() {
//   const { data, loading, error } = useFetch("https://reqres.in/api/users");

//   if (loading) {
//     return <div>Loading....</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return <div>{data.data[1].email}</div>;
// }

function App() {
  const [count, setCount] = useLocalStorage("count2", 0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
