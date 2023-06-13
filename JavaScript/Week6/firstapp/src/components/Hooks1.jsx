import { useState } from "react";

const Hooks1 = () => {
  let ages = [20, 22, 29, 19];
  const [numbers, setNumbers] = useState(ages);

  let changeList = () => {
    setNumbers((previousState) => {
      return [...previousState, Math.round(Math.random() * 25)];
    });
  };
  return (
    <div>
      <ul>
        {numbers.map((num, i) => (
          <li key={i}>{num}</li>
        ))}
      </ul>
      <button onClick={changeList}>Add Values</button>
    </div>
  );
};

export default Hooks1;
