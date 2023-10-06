import { useState } from "react";
import "./App.css";

function App() {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right,
    };

    setClicks(newClicks);
  };
  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1,
    };

    setClicks(newClicks);
  };

  return (
    <div>
      <p>{clicks.left}</p>
      <button onClick={handleLeftClick}>left</button>
      <p>{clicks.right}</p>
      <button onClick={handleRightClick}>right</button>
    </div>
  );
}

export default App;
