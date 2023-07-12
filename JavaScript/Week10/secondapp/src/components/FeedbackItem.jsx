import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <button
        className="close"
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        <FaTimes />
      </button>
      <div className="text-display">{item.text}</div>
    </div>
  );
};

export default FeedbackItem;
