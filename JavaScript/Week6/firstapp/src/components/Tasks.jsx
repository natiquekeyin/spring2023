import React from "react";
import Task from "./Task";

const Tasks = ({ values }) => {
  return (
    <>
      {values.map((value) => (
        <Task key={value.id} task={value} />
      ))}

      {/* <Task /> */}
    </>
  );
};

export default Tasks;
