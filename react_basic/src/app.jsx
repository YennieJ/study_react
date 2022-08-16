import "./app.module.css";
import State from "./component/state";
import Event from "./component/event";

function App() {
  const age = 10;
  return (
    <>
      <State age={age} />
      {/* <Event /> */}
    </>
  );
}

export default App;
