import { useState } from "react";
import "./styles.css";

function App() {
  let [count, setCount] = useState(0);
  let [factor, setFactor] = useState(1);
  const handleIncrement = () => {
    setCount(count + factor);
  };
  const handleDecrement = () => {
    setCount(count - factor);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleFactor = (inputFactor) => {
    if (inputFactor) setFactor(inputFactor);
    else setFactor(1);
  };

  return (
    <div id="main">
      <span>COUNTER APP</span>
      <h1>{count}</h1>
      <button class=".btn" onClick={handleIncrement}>
        Increment
      </button>
      <button class=".btn" onClick={handleDecrement}>
        Decrement
      </button>
      <button class=".btn" onClick={handleReset}>
        Reset
      </button>
      <div id="fac">
        Enter the factor by which increment or decrement should happen:{"\n"}
        <input
          type="number"
          value={factor}
          onChange={(e) => handleFactor(e.target.valueAsNumber)}
        />
      </div>
    </div>
  );
}

export default App;
