import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onClick={() => {
        onToggle(task.id);
      }}
    >
      <h4>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onDoubleClick={() => onDelete(task.id)}
        />
      </h4>
      <img src={task.avatar} alt="" />
    </div>
  );
};

export default Task;
