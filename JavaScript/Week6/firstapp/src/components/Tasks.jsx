import React from "react";
import Task from "./Task";

const Tasks = ({ values, onDelete, onToggle }) => {
  return (
    <>
      {values.map((value) => (
        <Task
          key={value.id}
          task={value}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}

      {/* <Task /> */}
    </>
  );
};

export default Tasks;
