import { useState, useRef } from "react";

const UseRef = () => {
  const [counter, setCounter] = useState(0);
  const countRef = useRef(0);

  const increatementState = () => {
    setCounter(counter + 1);
  };
  const increatementRef = () => {
    countRef.current += 1;
  };
  // In this if we click ref increment button the reference is increased but value is not updated on UI as it does not re-renders the component
  // It only updates the value on UI when component re-renders

  return (
    <>
      <h1>This is state vs ref</h1>
      <button onClick={increatementState}>
        This is State increment {counter}
      </button>
      <br />
      <button onClick={increatementRef}>
        This is ref increment {countRef.current}
      </button>
    </>
  );
};

export default UseRef;
