import "./App.css";
import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    if (count < 1) return;
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <Display count={count} />
      <Button text="Increase Count" handleClick={increaseCount} />
      <Button text="Decrease Count" handleClick={decreaseCount} />
      <Button text="Reset Count" handleClick={resetCount} />
    </div>
  );
}

export default App;
