import { FaDailymotion } from "react-icons/fa";
import { MdAddCard } from "react-icons/md";
import { BiBasket } from "react-icons/bi";

const Task = ({ task }) => {
  return (
    <div className="task">
      <p>
        <MdAddCard style={{ color: "red" }} />
        {task.text}
        <BiBasket style={{ color: "green" }} />
      </p>
    </div>
  );
};

export default Task;
