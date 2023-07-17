import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <>
        <Header />
        <div className="container">
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </div>
      </>
    </FeedbackProvider>
  );
}

export default App;
