import FeedbackItem from "./FeedbackItem";
const FeedbackList = ({ feedback }) => {
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
