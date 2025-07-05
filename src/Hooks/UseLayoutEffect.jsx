import { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {
  const [effectValue, setEffectValue] = useState("inital useEffect");
  const [layoutEffectValue, setLayoutEffectValue] = useState(
    "inital useLayoutEffect"
  );

  useEffect(() => {
    console.log("useEffect is triggered");
    setEffectValue("updated useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect is triggered");
    setLayoutEffectValue("updated useLayoutEffect");
  }, []);

  //here useLayoutEffect will trigger first as both useEffect and useLayoutEffect renders on page load but useLayoutEffect renders even before the page is painted
  return (
    <>
      <h1>useEffect Value: {effectValue}</h1>
      <h1>useLayoutEffect Value: {layoutEffectValue}</h1>
    </>
  );
};

export default UseLayoutEffect;
