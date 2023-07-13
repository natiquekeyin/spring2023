import "./App.css";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  // to add the feedback we need a function...

  const addFeedback = (newFeedback) => {
    newFeedback.id = feedback.length + 1;
    setFeedback([newFeedback, ...feedback]);

    // console.log("Add feedback here");
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete the feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
