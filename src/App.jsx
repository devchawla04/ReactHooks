import "./App.css";
import UseEffect from "./Hooks/UseEffect";
import UseLayoutEffect from "./Hooks/useLayoutEffect";
import UseRef from "./Hooks/useRef";
import UseState from "./Hooks/UseState";

function App() {
  return (
    <>
      <h1>This is UseState</h1>
      <UseState />
      <hr />
      <h1>This is useEffect</h1>
      <UseEffect />
      <hr />
      <h1>This is useLayoutEffect vs useEffect</h1>
      <UseLayoutEffect />
      <hr />
       <UseRef />
    </>
  );
}

export default App;
