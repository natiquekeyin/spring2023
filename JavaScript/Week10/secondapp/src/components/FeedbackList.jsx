import FeedbackItem from "./FeedbackItem";
const FeedbackList = ({ feedback, handleDelete }) => {
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FeedbackList;
