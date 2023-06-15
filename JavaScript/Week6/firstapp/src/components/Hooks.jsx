import { useState, useEffect } from "react";

function Hooks() {
  // const obj = { name: "Alan", age: 23, height: 5.11, isYoung: true };

  // const [person, setPerson] = useState(obj);

  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  useEffect(() => {
    console.log("use effect executed");
  }, [num1]);

  let changeState = () => {
    // setPerson((previousState) => {
    //   return {
    //     ...previousState,
    //     name: "Bob",
    //     isYoung: false,
    //   };
    // });

    setNum(num + 1);
  };

  return (
    <div>
      <h2>Hooks Introducton</h2>

      <h4>{num}</h4>
      <h4>{num1}</h4>
      {/* <h4>
        Name: <strong>{person.name}</strong>{" "}
      </h4>
      <h4>Age:{person.age}</h4>
      <h4>Height:{person.height}</h4>
      <h4>IsYoung:{person.isYoung.toString()}</h4> */}
      <button onClick={changeState}>Change Num</button>
      <button
        onClick={() => {
          setNum1(num1 + 1);
        }}
      >
        Change Num1
      </button>
    </div>
  );
}

export default Hooks;
