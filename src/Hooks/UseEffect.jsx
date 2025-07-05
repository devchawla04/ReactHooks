import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(1);
  const [demo, setDemo] = useState("");

  //useEffect triggers on page mounting and then triggers when dependency is updated
  //although comp is re-rendered if we update the state useEffect is used to perform specific operations on mounting or specific state updates
  //mostly for API calls

  useEffect(() => {
    setDemo(`Use Effect is triggered ${count}`);
  }, [count]);

  return (
    <>
      <h1>useEffect will trigger on button click</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me to trigger useEffect
      </button>
      <h2>{demo}</h2>
    </>
  );
};

export default UseEffect;
