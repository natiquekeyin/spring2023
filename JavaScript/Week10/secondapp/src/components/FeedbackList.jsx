import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
