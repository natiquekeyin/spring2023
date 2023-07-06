import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";

const TaskDetails = () => {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();
      if (res.status === 404) {
        navigate("/about");
        setError("Task not found");
      }

      setTask(data);
      setLoading(false);
    };

    fetchTask();
  });
  return (
    <div className="taskD">
      <h3>TaskDetails</h3>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <div>
          <h3>{task.text}</h3>

          <p>{task.day}</p>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
