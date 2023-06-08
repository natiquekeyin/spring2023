import React from "react";

const Tasks = () => {
  const tasks = [
    { id: 1, text: "Groceries", day: "June 9th at 1:00pm" },
    { id: 2, text: "Meeting", day: "June 19th at 12:00pm" },
    { id: 3, text: "Appointment with Mechanice", day: "June 16th at 10:00am" },
  ];

  return (
    <>
      {tasks.map((task) => (
        <h5 key={task.id}>{task.text}</h5>
      ))}
    </>
  );
};

export default Tasks;
