import { useState } from "react";

function Hooks() {
  const obj = { name: "Alan", age: 23, height: 5.11, isYoung: true };

  const [person, setPerson] = useState(obj);

  let changeState = () => {
    setPerson((previousState) => {
      return {
        ...previousState,
        name: "Bob",
        isYoung: false,
      };
    });
  };

  return (
    <div>
      <h2>Hooks Introducton</h2>
      <h4>
        Name: <strong>{person.name}</strong>{" "}
      </h4>
      <h4>Age:{person.age}</h4>
      <h4>Height:{person.height}</h4>
      <h4>IsYoung:{person.isYoung.toString()}</h4>
      <button onClick={changeState}>Update Person</button>
    </div>
  );
}

export default Hooks;
