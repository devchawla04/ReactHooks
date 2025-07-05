import { useState } from "react";

const UseState = () => {
  //useState gives array of variable and function through which it can be accessed and updated
  const [counter, setCounter] = useState(0);

  return (
    <>
      {counter}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase Counter +
      </button>
    </>
  );
};

export default UseState;
